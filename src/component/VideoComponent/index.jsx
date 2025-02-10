import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined'

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100%',
    minHeight: '380px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    overflow: 'hidden',
    borderRadius: '30px'
  },
  iframeWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
    display: 'block'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to left, #701A75, #701A75, #1E40AF, #1E40AF)',
    opacity: 0.7
  },
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
    zIndex: 2,
    padding: '2rem',
    backgroundColor: '#000',
    opacity: 0.3
  },
  thumbnail: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '30px'
  }
}

const VideoComponent = ({ videoSrc, autoPlay = false }) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  useEffect(() => {
    if (autoPlay) {
      setIsPlaying(true)
    }
  }, [autoPlay])

  const getEmbeddedUrl = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&modestbranding=1&showinfo=0&rel=0`;
    }
    return url;
  };
  

  const getThumbnailUrl = (url) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop()
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    }
    return ''
  }

  return (
    <Box sx={styles.container}>
      {isPlaying ? (
        <Box sx={styles.iframeWrapper}>
          <iframe
            src={getEmbeddedUrl(videoSrc)}
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={styles.iframe}
            
          />
          <script src="https://player.vimeo.com/api/player.js"></script>
        </Box>
      ) : (
        <>
          <img src={getThumbnailUrl(videoSrc)} alt='Video Thumbnail' style={styles.thumbnail} />
          <Box sx={styles.overlay} />
          <IconButton color='primary' onClick={() => setIsPlaying(true)} sx={styles.playButton}>
            <PlayArrowOutlinedIcon sx={{ fontSize: '80px', color: '#FFFFFF', borderRadius: '50%' }} />
          </IconButton>
        </>
      )}
    </Box>
  )
}

export default VideoComponent
