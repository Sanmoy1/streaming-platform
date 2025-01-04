export const userData = {
  id: 1,
  username: "MusicLover",
  name: "Alex Johnson",
  email: "alex.j@example.com",
  avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop",
  joinDate: "2023-01-15",
  stats: {
    playlistsCreated: 12,
    tracksLiked: 248,
    hoursListened: 420,
    followers: 89,
    following: 134
  },
  recentlyPlayed: [
    {
      id: 1,
      title: "Eye of the Tiger",
      artist: "Survivor",
      cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
      playedAt: "2025-01-04T10:30:00"
    },
    {
      id: 7,
      title: "Perfect",
      artist: "Ed Sheeran",
      cover: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=300&h=300&fit=crop",
      playedAt: "2025-01-04T10:15:00"
    },
    {
      id: 5,
      title: "Waves",
      artist: "Mr Probz",
      cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
      playedAt: "2025-01-04T10:00:00"
    }
  ],
  preferences: {
    theme: "dark",
    language: "English",
    audioQuality: "High",
    notifications: {
      newReleases: true,
      playlistUpdates: true,
      artistUpdates: false
    }
  }
};
