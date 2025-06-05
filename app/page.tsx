"use client"

import { useState, useRef, useEffect } from "react"
import { Play, Pause } from "lucide-react"

export default function IdulAdhaLanding() {
  const [isLoading, setIsLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Array of background images for slideshow
  const backgroundImages = ["/images/SI24F.jpg", "/images/SI24F-2.jpg", "/images/SI24F-3.jpg", "/images/SI24F-4.jpg"]

  useEffect(() => {
    // Loading screen duration
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // 3 seconds loading

    return () => clearTimeout(loadingTimer)
  }, [])

  useEffect(() => {
    // Slideshow timer - change image every 2 seconds
    if (!isLoading) {
      const slideshowTimer = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
      }, 2000) // 2 seconds per image

      return () => clearInterval(slideshowTimer)
    }
  }, [isLoading, backgroundImages.length])

  useEffect(() => {
    // Only try to play audio after loading is complete
    if (!isLoading) {
      const audio = audioRef.current
      if (audio) {
        const playAudio = async () => {
          try {
            await audio.play()
            setIsPlaying(true)
          } catch (error) {
            console.log("Autoplay prevented by browser:", error)
            setIsPlaying(false)
          }
        }
        // Small delay to ensure smooth transition
        setTimeout(playAudio, 500)
      }
    }
  }, [isLoading])

  const handleUserInteraction = () => {
    const audio = audioRef.current
    if (audio && !isPlaying && !isLoading) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.log("Audio play failed:", error)
        })
    }
  }

  const toggleAudio = () => {
    const audio = audioRef.current
    if (audio) {
      if (isPlaying) {
        audio.pause()
        setIsPlaying(false)
      } else {
        audio.play()
        setIsPlaying(true)
      }
    }
  }

  // Loading Screen Component
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 flex items-center justify-center z-50">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full animate-pulse" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <defs>
              <pattern id="loading-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="#FFD700" />
                <path d="M10,2 L18,10 L10,18 L2,10 Z" fill="none" stroke="#FFD700" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#loading-pattern)" />
          </svg>
        </div>

        {/* Loading Content */}
        <div className="relative z-10 text-center">
          {/* Logos Container */}
          <div className="flex items-center justify-center gap-8 mb-8">
            {/* HMSI Logo */}
            <div className="animate-fade-in-left">
              <img
                src="/images/HMSI.png"
                alt="HMSI Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain animate-float"
              />
            </div>

            {/* Divider */}
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-yellow-400 to-transparent animate-pulse"></div>

            {/* Nusa Putra Logo */}
            <div className="animate-fade-in-right">
              <img
                src="/images/LOGO NUSPUT.png"
                alt="Nusa Putra University Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain animate-float-delayed"
              />
            </div>
          </div>

          {/* Loading Text */}
          <div className="animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl font-serif text-white mb-2 animate-pulse">Selamat Datang</h2>
            <p className="text-yellow-400 text-lg font-medium mb-6">Mahasiswa Sistem Informasi — SI24F</p>
          </div>

          {/* Loading Spinner */}
          <div className="flex justify-center items-center gap-2 animate-fade-in-up-delayed">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>

          {/* Loading Progress Bar */}
          <div className="mt-8 w-64 mx-auto">
            <div className="w-full bg-emerald-700/30 rounded-full h-1">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 h-1 rounded-full animate-loading-bar"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Main Landing Page
  return (
    <div
      className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        isLoading ? "opacity-0" : "opacity-100 animate-fade-in"
      }`}
      onClick={handleUserInteraction}
    >
      {/* Slideshow Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Islamic Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="islamic-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#FFD700" />
              <path d="M10,2 L18,10 L10,18 L2,10 Z" fill="none" stroke="#FFD700" strokeWidth="0.5" />
              <path d="M10,6 L14,10 L10,14 L6,10 Z" fill="none" stroke="#FFD700" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
        </svg>
      </div>

      {/* HMSI Logo */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 animate-slide-in-left">
        <img
          src="/images/HMSI.png"
          alt="HMSI Logo"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Nusa Putra University Logo */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 animate-slide-in-right">
        <img
          src="/images/LOGO NUSPUT.png"
          alt="Nusa Putra University Logo"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Slideshow Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {backgroundImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-yellow-400 w-6" : "bg-white/50 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto animate-fade-in-up">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="font-serif animate-fade-in-up">Selamat Hari Raya</span>
          <br />
          <span className="text-yellow-400 font-serif animate-fade-in-up-delayed">Idul Adha</span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif animate-fade-in-up-delayed-2">
            1446 H
          </span>
        </h1>

        {/* Subheadline */}
        <div className="mb-8 animate-fade-in-up-delayed-3">
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium">Mahasiswa Sistem Informasi — SI24F</p>
          <p className="text-base sm:text-lg md:text-xl text-yellow-400 font-medium">Angkatan 2024</p>
        </div>

        {/* Islamic Quote */}
        <div className="bg-emerald-900/30 backdrop-blur-sm rounded-lg p-6 sm:p-8 mb-8 border border-yellow-400/20 animate-fade-in-up-delayed-4">
          <p className="text-base sm:text-lg md:text-xl text-white/95 leading-relaxed italic font-light">
            "Takbir menggema, langit pun bersyair syahdu. Semoga setiap niat baik dan pengorbanan kita mendapat
            ridha-Nya. Selamat Idul Adha, mari terus belajar ikhlas, seperti Ibrahim dan Ismail."
          </p>
        </div>

        {/* Audio Control */}
        <div className="flex justify-center animate-fade-in-up-delayed-5">
          <button
            onClick={toggleAudio}
            className="group flex items-center gap-3 bg-emerald-800/80 hover:bg-emerald-700/90 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {isPlaying ? <Pause className="w-5 h-5 text-yellow-400" /> : <Play className="w-5 h-5 text-yellow-400" />}
            <span className="font-medium">{isPlaying ? "Pause Audio" : "Play Audio"}</span>
          </button>
        </div>
      </div>

      {/* Audio Element */}
      <audio ref={audioRef} loop preload="auto" className="hidden">
        <source src="/audio/eid-adha.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 border-2 border-yellow-400/30 rounded-full hidden lg:block animate-fade-in-delayed" />
      <div className="absolute top-20 right-20 w-12 h-12 border-2 border-yellow-400/20 rotate-45 hidden lg:block animate-fade-in-delayed-2" />
      <div className="absolute bottom-20 left-20 w-8 h-8 bg-yellow-400/20 rounded-full hidden lg:block animate-fade-in-delayed-3" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border border-yellow-400/20 rounded-full hidden lg:block animate-fade-in-delayed-4" />
    </div>
  )
}
