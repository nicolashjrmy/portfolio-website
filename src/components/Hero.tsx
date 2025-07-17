"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Music, Play, Pause, X, ExternalLink, Clock, Loader2, AlertCircle } from "lucide-react"
import { useSpotify, formatDuration, formatTimeAgo, getImageUrl } from "@/hooks/useSpotify"
import {FaSpotify} from 'react-icons/fa6'

type TypewriterTextProps = {
  texts: string[]
}

const TypewriterText = ({ texts }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        const currentText = texts[currentIndex]
        if (displayText.length < currentText.length) {
          setDisplayText((prevText) => currentText.slice(0, prevText.length + 1))
        } else {
          setIsTyping(false)
          clearInterval(typingInterval)
          setTimeout(() => {
            setIsTyping(true)
            setDisplayText("")
            setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
          }, 2000)
        }
      }
    }, 100)

    return () => {
      clearInterval(typingInterval)
    }
  }, [currentIndex, isTyping, texts, displayText])

  return (
    <span className="inline-block text-[#915EFF] font-bold">
      {displayText.split("").map((char, index) => (
        <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.1 }}>
          {char}
        </motion.span>
      ))}
      {isTyping && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="inline-block ml-1"
        >
          |
        </motion.span>
      )}
    </span>
  )
}

const WavingHand = () => {
  return (
    <img
      src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f44b.png"
      alt="Waving Hand"
      className="wave-emoji mr-3 inline-block"
      style={{ display: "inline-block", width: "45px", height: "45px", verticalAlign: "baseline" }}
    />
  )
}

const SpotifyModal = ({
  isOpen,
  onClose,
  accessToken,
}: {
  isOpen: boolean
  onClose: () => void
  accessToken: string | null
}) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null)
  const { recentTracks, playlists, loading, error } = useSpotify(accessToken)

  const handlePlayPause = (trackId: string) => {
    if (currentlyPlaying === trackId) {
      setCurrentlyPlaying(null)
    } else {
      setCurrentlyPlaying(trackId)
    }
  }

  const handleSpotifyAuth = () => {
    window.location.href = "/api/spotify/auth"
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Music className="w-6 h-6" />
              <h2 className="text-2xl font-bold">My Spotify Vibes</h2>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-green-100 mt-2">Music that fuels my coding sessions</p>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {!accessToken ? (
            <div className="flex flex-col items-center justify-center py-12">
              <Music className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Connect to Spotify</h3>
              <p className="text-gray-600 mb-6 text-center">
                Authorize access to see my recently played tracks and playlists
              </p>
              <button
                onClick={handleSpotifyAuth}
                className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-medium"
              >
                Connect Spotify
              </button>
            </div>
          ) : loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-green-500" />
              <span className="ml-3 text-gray-600">Loading your music...</span>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-12">
              <AlertCircle className="w-8 h-8 text-red-500 mb-4" />
              <div className="text-center">
                <p className="text-red-600 font-medium mb-2">Failed to load Spotify data</p>
                <p className="text-sm text-gray-500 mb-4">{error}</p>
                {error.includes("403") && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                    <p className="text-sm text-yellow-800">
                      <strong>Permission Error:</strong> Your access token doesn&apos;t have the required permissions. Please
                      reconnect with the proper scopes.
                    </p>
                  </div>
                )}
                <button
                  onClick={handleSpotifyAuth}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                >
                  Reconnect Spotify
                </button>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Recently Played */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-green-500" />
                  <span>Recently Played</span>
                </h3>
                <div className="space-y-3">
                  {recentTracks.length > 0 ? (
                    recentTracks.map((item) => (
                      <div
                        key={`${item.track.id}-${item.played_at}`}
                        className="group bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                            <Image
                              src={getImageUrl(item.track.album.images, "small") || "/placeholder.svg"}
                              alt={`${item.track.album.name} cover`}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                              <button
                                onClick={() => handlePlayPause(item.track.id)}
                                className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                              >
                                {currentlyPlaying === item.track.id ? (
                                  <Pause className="w-3 h-3 text-white" />
                                ) : (
                                  <Play className="w-3 h-3 text-white ml-0.5" />
                                )}
                              </button>
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 truncate text-sm">{item.track.name}</h4>
                            <p className="text-xs text-gray-600 truncate">
                              {item.track.artists.map((artist) => artist.name).join(", ")}
                            </p>
                          </div>
                          <div className="text-right text-xs text-gray-500 flex-shrink-0">
                            <p>{formatDuration(item.track.duration_ms)}</p>
                            <p>{formatTimeAgo(item.played_at)}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-8">No recent tracks found</p>
                  )}
                </div>
              </div>

              {/* Playlists */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <Music className="w-5 h-5 text-green-500" />
                  <span>My Playlists</span>
                </h3>
                <div className="space-y-4">
                  {playlists.length > 0 ? (
                    playlists.slice(0, 3).map((playlist) => (
                      <div
                        key={playlist.id}
                        className="group bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                            <Image
                              src={getImageUrl(playlist.images, "small") || "/placeholder.svg"}
                              alt={`${playlist.name} cover`}
                              fill
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                              <a
                                href={playlist.external_urls.spotify}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                              >
                                <Play className="w-4 h-4 text-white ml-0.5" />
                              </a>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{playlist.name}</h4>
                            <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                              {playlist.description || "No description"}
                            </p>
                            <div className="flex items-center space-x-3 text-xs text-gray-500">
                              <span>{playlist.tracks.total} tracks</span>
                              {playlist.followers && (
                                <>
                                  <span>•</span>
                                  <span>{playlist.followers.total.toLocaleString()} followers</span>
                                </>
                              )}
                              {!playlist.public && (
                                <>
                                  <span>•</span>
                                  <span className="text-orange-600">Private</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-8">No playlists found</p>
                  )}
                </div>

                {/* Stats */}
                <div className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Music Stats</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-xl font-bold text-green-600">{recentTracks.length}</p>
                      <p className="text-xs text-gray-600">Recent Tracks</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-emerald-600">{playlists.length}</p>
                      <p className="text-xs text-gray-600">Playlists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">Music powered by Spotify</p>
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm text-green-600 hover:text-green-700 transition-colors"
              >
                <span>Listen on Spotify</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [isSpotifyOpen, setIsSpotifyOpen] = useState(false)
  const [accessToken, setAccessToken] = useState<string | null>(null)

  const typedItems = ["Software Developer", "Backend Engineer", "Computer Enthusiast", "Casual Dota Enjoyer"]

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const token = urlParams.get("access_token")
    const expiresIn = urlParams.get("expires_in")

    if (token) {
      setAccessToken(token)

      const expiresAt = Date.now() + Number.parseInt(expiresIn || "3600") * 1000
      localStorage.setItem("spotify_token", token)
      localStorage.setItem("spotify_expires_at", expiresAt.toString())

      window.history.replaceState({}, document.title, window.location.pathname)
    } else {
      const storedToken = localStorage.getItem("spotify_token")
      const expiresAt = localStorage.getItem("spotify_expires_at")

      if (storedToken && expiresAt && Date.now() < Number.parseInt(expiresAt)) {
        setAccessToken(storedToken)
      }
    }
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-start pt-54 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Right Image */}
          <div className="relative animate-fade-in-right">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 relative">
              <Image
                src="/image.png?height=500&width=600"
                alt="Nicolash working on backend systems"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />

              {/* Floating Spotify Logo */}
              <button
                onClick={() => setIsSpotifyOpen(true)}
                className="absolute bottom-4 left-4 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group z-10"
                title="See what I've been listening to"
              >
                <FaSpotify className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-200" />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </button>
            </div>
          </div>
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight inline-flex items-baseline">
                <WavingHand />
                <span>
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Nicolash
                  </span>
                </span>
              </h1>

              <h2 className="text-2xl lg:text-3xl text-gray-600 font-medium leading-relaxed">
                I&apos;m a <TypewriterText texts={typedItems} />
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl">
              Specializing in distributed systems, database optimization, and high-performance backend infrastructure.
              Currently architecting solutions that handle millions of requests daily.
            </p>

            {/* Tech stack and location */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-purple-500 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-sm text-gray-500">Node.js • Python • Go</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Jakarta, ID</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - positioned to be visible at bottom of viewport */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="flex flex-col items-center space-y-2 my-12">
            <span className="text-sm text-gray-500 font-medium">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center bg-white/80 backdrop-blur-sm">
              <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Spotify Modal */}
      <SpotifyModal isOpen={isSpotifyOpen} onClose={() => setIsSpotifyOpen(false)} accessToken={accessToken} />
    </section>
  )
}
