"use client"

import { useState, useEffect } from "react"

// Types for Spotify API responses
export interface SpotifyTrack {
  id: string
  name: string
  artists: Array<{ name: string }>
  album: {
    name: string
    images: Array<{ url: string; height: number; width: number }>
  }
  duration_ms: number
  preview_url: string | null
  external_urls: {
    spotify: string
  }
}

export interface SpotifyPlaylist {
  id: string
  name: string
  description: string
  images: Array<{ url: string; height: number; width: number }>
  tracks: {
    total: number
  }
  followers: {
    total: number
  }
  public: boolean
  external_urls: {
    spotify: string
  }
}

export interface RecentlyPlayedTrack {
  track: SpotifyTrack
  played_at: string
}

export interface SpotifyData {
  recentTracks: RecentlyPlayedTrack[]
  playlists: SpotifyPlaylist[]
  loading: boolean
  error: string | null
}

export function useSpotify(accessToken: string | null): SpotifyData {
  const [recentTracks, setRecentTracks] = useState<RecentlyPlayedTrack[]>([])
  const [playlists, setPlaylists] = useState<SpotifyPlaylist[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Function to fetch recently played tracks
  const fetchRecentTracks = async (token: string) => {
    try {
      const response = await fetch("https://api.spotify.com/v1/me/top/tracks", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Access token expired or invalid")
        }
        throw new Error(`Failed to fetch recent tracks: ${response.status}`)
      }

      const data = await response.json()
      setRecentTracks(data.items || [])
    } catch (err) {
      console.error("Error fetching recent tracks:", err)
      setError(err instanceof Error ? err.message : "Failed to fetch recent tracks")
    }
  }

  // Function to fetch user playlists
  const fetchPlaylists = async (token: string) => {
    try {
      const response = await fetch("https://api.spotify.com/v1/me/playlists?limit=10", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error("Access token expired or invalid")
        }
        throw new Error(`Failed to fetch playlists: ${response.status}`)
      }

      const data = await response.json()
      setPlaylists(data.items || [])
    } catch (err) {
      console.error("Error fetching playlists:", err)
      setError(err instanceof Error ? err.message : "Failed to fetch playlists")
    }
  }

  // Main effect to fetch data when access token changes
  useEffect(() => {
    const fetchSpotifyData = async () => {
      if (!accessToken) {
        setLoading(false)
        return
      }

      setLoading(true)
      setError(null)

      try {
        await Promise.all([fetchRecentTracks(accessToken), fetchPlaylists(accessToken)])
      } catch (err) {
        console.error("Error fetching Spotify data:", err)
        setError(err instanceof Error ? err.message : "Failed to fetch Spotify data")
      } finally {
        setLoading(false)
      }
    }

    fetchSpotifyData()
  }, [accessToken])

  return {
    recentTracks,
    playlists,
    loading,
    error,
  }
}

// Helper functions
export const formatDuration = (ms: number): string => {
  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)
  return `${minutes}:${seconds.toString().padStart(2, "0")}`
}

export const formatTimeAgo = (dateString: string): string => {
  const now = new Date()
  const played = new Date(dateString)
  const diffMs = now.getTime() - played.getTime()
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffHours / 24)

  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`
  } else {
    const diffMinutes = Math.floor(diffMs / (1000 * 60))
    return `${Math.max(1, diffMinutes)} minute${diffMinutes > 1 ? "s" : ""} ago`
  }
}

export const getImageUrl = (
  images: Array<{ url: string; height: number; width: number }>,
  size: "small" | "medium" | "large" = "medium",
): string => {
  if (!images || images.length === 0) {
    return "/placeholder.svg?height=64&width=64"
  }

  // Sort images by size
  const sortedImages = [...images].sort((a, b) => (b.height || 0) - (a.height || 0))

  switch (size) {
    case "small":
      return sortedImages[sortedImages.length - 1]?.url || sortedImages[0]?.url || "/placeholder.svg?height=64&width=64"
    case "large":
      return sortedImages[0]?.url || "/placeholder.svg?height=300&width=300"
    case "medium":
    default:
      return (
        sortedImages[Math.floor(sortedImages.length / 2)]?.url ||
        sortedImages[0]?.url ||
        "/placeholder.svg?height=200&width=200"
      )
  }
}
