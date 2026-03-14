import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
// Cloudinary optimized video URLs
const CLOUDINARY_BASE_URL =
  "https://res.cloudinary.com/dvdrsgkpg/video/upload/f_auto,q_auto/v1773472221";

const showreelVideo = `${CLOUDINARY_BASE_URL}/showreel_x10qxz.mp4`;
const v2Video = `${CLOUDINARY_BASE_URL}/v2_o9ap9x.mp4`;
const v3Video = `${CLOUDINARY_BASE_URL}/v3_jbmo60.mp4`;

const works = [
  {
    id: 1,
    title: "VIRTUAL REALITY",
    subtitle: "Immersive Experiences",
    video: showreelVideo,
    color: "var(--brand-teal)",
  },
  {
    id: 2,
    title: "DIGITAL MOTION",
    subtitle: "Fluid Dynamics",
    video: v2Video,
    color: "var(--brand-yellow)",
  },
  {
    id: 3,
    title: "NEON DREAMS",
    subtitle: "Cyberpunk Aesthetics",
    video: v3Video,
    color: "var(--brand-purple)",
  },
];

const WorkCard = ({ work, index, progress, range, targetScale, onClick }) => {
  const container = useRef(null);

  // Progress within this specific card's range
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 0,
        zIndex: index + 1,
      }}
    >
      <motion.div
        data-cursor-hover
        data-cursor-text="VIEW"
        onClick={onClick}
        className="works-card"
        style={{
          scale,
          width: "90vw",
          maxWidth: "1400px",
          height: "80vh",
          position: "relative",
          borderRadius: "40px",
          overflow: "hidden",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: "0 50px 100px rgba(0, 0, 0, 0.4)",
          background: "rgba(10, 10, 10, 0.8)",
          top: `calc(-5% + ${index * 25}px)`, // Slight offset for stack look
          cursor: "pointer",
        }}
      >
        <video
          src={work.video}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Overlay Info */}
        <div
          className="card-overlay"
          style={{
            position: "absolute",
            bottom: "3rem",
            left: "3rem",
            zIndex: 3,
            color: "white",
          }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: "0.9rem",
              fontWeight: 700,
              color: work.color,
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "0.5rem",
            }}
          >
            {work.subtitle}
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              margin: 0,
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            {work.title}
          </motion.h3>
        </div>

        {/* Decorative corner glow */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "40%",
            height: "40%",
            background: `radial-gradient(circle, ${work.color}22 0%, transparent 70%)`,
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
      </motion.div>
    </div>
  );
};

const PremiumVideoPlayer = ({ src, onClose, color }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = (e) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      setProgress((current / duration) * 100);
    }
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const bounds = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - bounds.left;
      const percentage = x / bounds.width;
      videoRef.current.currentTime = percentage * videoRef.current.duration;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        zIndex: 100001,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(20px)",
      }}
      onClick={onClose}
    >
      {/* Animated Gradient Border Wrapper */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="video-player-container"
        style={{
          width: "90vw",
          height: "80vh",
          maxWidth: "1400px",
          position: "relative",
          borderRadius: "28px",
          padding: "4px", // Space for the gradient border
          background:
            "linear-gradient(90deg, #c5d429, #00a99d, #3b6bb5, #7b3f9e, #c5d429)",
          backgroundSize: "200% auto",
          animation: "gradientFlow 5s linear infinite",
          boxShadow: "0 50px 100px rgba(0,0,0,0.6)",
          zIndex: 100002,
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the player
      >
        {/* Inner Video Container */}
        <div
          data-cursor-hover
          onClick={togglePlay}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#050505",
            borderRadius: "24px",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "none", // Will use custom cursor, but we can manage local interaction
          }}
        >
          <video
            ref={videoRef}
            src={src}
            autoPlay
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />

          {/* Center Play/Pause Overlay */}
          <AnimatePresence>
            {!isPlaying && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                style={{
                  position: "absolute",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  pointerEvents: "none", // Let clicks pass through to the video container
                }}
              >
                <Play
                  size={40}
                  fill="currentColor"
                  style={{ marginLeft: "5px" }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Controls Bar */}
          <div
            onClick={(e) => e.stopPropagation()} // Keep controls interactive without triggering play/pause
            className="player-controls"
            style={{
              position: "absolute",
              bottom: "20px",
              left: "5%",
              width: "90%",
              height: "60px",
              backgroundColor: "rgba(10, 10, 10, 0.6)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              padding: "0 20px",
              gap: "20px",
              opacity: 0.9,
              transition: "opacity 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.9)}
          >
            {/* Play/Pause small button */}
            <button
              data-cursor-hover
              onClick={togglePlay}
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.1)")
              }
            >
              {isPlaying ? (
                <Pause size={20} fill="currentColor" />
              ) : (
                <Play
                  size={20}
                  fill="currentColor"
                  style={{ marginLeft: "2px" }}
                />
              )}
            </button>

            {/* Scrubber/Progress Bar */}
            <div
              data-cursor-hover
              onClick={handleSeek}
              style={{
                flex: 1,
                height: "20px", // Larger hit area
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "4px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "2px",
                  position: "relative",
                }}
              >
                <motion.div
                  style={{
                    height: "100%",
                    backgroundColor: "white",
                    borderRadius: "2px",
                    width: `${progress}%`,
                  }}
                  layout
                />
                <motion.div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: `${progress}%`,
                    width: "12px",
                    height: "12px",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                  }}
                  layout
                />
              </div>
            </div>

            {/* Mute/Unmute */}
            <button
              data-cursor-hover
              onClick={toggleMute}
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
          </div>

          {/* Close Button */}
          <button
            data-cursor-hover
            onClick={onClose}
            className="close-btn"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(10, 10, 10, 0.5)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "white",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              zIndex: 20,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "black";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(10, 10, 10, 0.5)";
              e.currentTarget.style.color = "white";
            }}
          >
            ✕
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const WorksVideo = () => {
  const containerRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
      document.body.style.overflowX = "hidden";
    };
  }, [selectedVideo]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="works-video-section"
      style={{
        position: "relative",
        background: "var(--bg-color)",
        paddingBottom: "10vh",
        paddingTop: 0,
      }}
    >
      <style>{`
        @media (max-width: 768px) {
          .works-bg-title {
            font-size: clamp(3.5rem, 15vw, 10rem) !important;
          }
          .works-card {
            width: 92vw !important;
            height: 70vh !important;
          }
          .card-overlay {
            bottom: 2rem !important;
            left: 1.5rem !important;
            right: 1.5rem !important;
          }
          .video-player-container {
            width: 95vw !important;
            height: 60vh !important;
          }
          .player-controls {
            bottom: 10px !important;
            left: 2.5% !important;
            width: 95% !important;
            padding: 0 10px !important;
            gap: 10px !important;
          }
          .close-btn {
            top: 10px !important;
            right: 10px !important;
          }
        }
      `}</style>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          zIndex: 0,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <h2
          className="works-bg-title"
          style={{
            fontSize: "clamp(4rem, 20vw, 20rem)",
            fontWeight: 900,
            color: "#ffffff",
            margin: 0,
            lineHeight: 0.8,
            textAlign: "center",
            letterSpacing: "-0.04em",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          WORKS
        </h2>
      </div>

      <div style={{ position: "relative" }}>
        {works.map((work, i) => {
          const targetScale = 1 - (works.length - i) * 0.05;
          return (
            <WorkCard
              key={work.id}
              work={work}
              index={i}
              progress={scrollYProgress}
              range={[i / works.length, 1]}
              targetScale={targetScale}
              onClick={() => setSelectedVideo(work.video)}
            />
          );
        })}
      </div>

      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedVideo && (
              <PremiumVideoPlayer
                src={selectedVideo}
                onClose={() => setSelectedVideo(null)}
              />
            )}
          </AnimatePresence>,
          document.body,
        )}
    </section>
  );
};

export default WorksVideo;
