"use client"

// Spotify API configuration
export const SPOTIFY_CONFIG = {
  CLIENT_ID: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID,
  CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
  REDIRECT_URI: process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI || "http://localhost:3000/callback",
  SCOPES: [
    "user-read-recently-played",
    "playlist-read-private",
    "playlist-read-collaborative",
    "user-read-playback-state",
    "user-read-currently-playing",
  ].join(" "),
}

// Token management
export class SpotifyTokenManager {
  private static TOKEN_KEY = "spotify_access_token"
  private static REFRESH_TOKEN_KEY = "spotify_refresh_token"
  private static EXPIRES_AT_KEY = "spotify_expires_at"

  static setTokens(accessToken: string, refreshToken?: string, expiresIn?: number) {
    localStorage.setItem(this.TOKEN_KEY, accessToken)

    if (refreshToken) {
      localStorage.setItem(this.REFRESH_TOKEN_KEY, refreshToken)
    }

    if (expiresIn) {
      const expiresAt = Date.now() + expiresIn * 1000
      localStorage.setItem(this.EXPIRES_AT_KEY, expiresAt.toString())
    }
  }

  static getAccessToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY)
  }

  static getRefreshToken(): string | null {
    return localStorage.getItem(this.REFRESH_TOKEN_KEY)
  }

  static isTokenExpired(): boolean {
    const expiresAt = localStorage.getItem(this.EXPIRES_AT_KEY)
    if (!expiresAt) return true

    return Date.now() >= Number.parseInt(expiresAt)
  }

  static clearTokens() {
    localStorage.removeItem(this.TOKEN_KEY)
    localStorage.removeItem(this.REFRESH_TOKEN_KEY)
    localStorage.removeItem(this.EXPIRES_AT_KEY)
  }

  static async refreshAccessToken(): Promise<string | null> {
    const refreshToken = this.getRefreshToken()
    if (!refreshToken) return null

    try {
      const response = await fetch("/api/spotify/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh_token: refreshToken }),
      })

      if (!response.ok) {
        throw new Error("Failed to refresh token")
      }

      const data = await response.json()
      this.setTokens(data.access_token, refreshToken, data.expires_in)

      return data.access_token
    } catch (error) {
      console.error("Error refreshing token:", error)
      this.clearTokens()
      return null
    }
  }
}

// Initialize with your access token
export const initializeSpotifyToken = (accessToken: string, expiresIn = 3600) => {
  SpotifyTokenManager.setTokens(accessToken, undefined, expiresIn)
}
