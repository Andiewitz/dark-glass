"use client";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Folder } from "lucide-react";

export interface GalleryPhoto {
  id: string | number;
  image: string;
  title?: string;
  href?: string;
}

const defaultPhotos: GalleryPhoto[] = [
  { id: 1, image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", title: "Aurora UI" },
  { id: 2, image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=800&auto=format&fit=crop", title: "Neon Dashboard" },
  { id: 3, image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop", title: "Studio Site" },
  { id: 4, image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=800&auto=format&fit=crop", title: "Commerce App" },
  { id: 5, image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=800&auto=format&fit=crop", title: "Motion Lab" },
];

export interface InteractiveFolderGalleryProps {
  photos?: GalleryPhoto[];
  folderName?: string;
  dragHintText?: string;
  className?: string;
}

const SPACING = 84;
const CARD_W = 160;
const CARD_H = 100;

const cardSurface =
  "rounded-[16px] border border-white/10 bg-white/5 backdrop-blur-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_24px_48px_-12px_rgba(0,0,0,0.6)]";

export function InteractiveFolderGallery({
  photos = defaultPhotos,
  folderName = "Projects.gallery",
  dragHintText = "Drag any card down to close",
  className,
}: InteractiveFolderGalleryProps) {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [hoverFolder, setHoverFolder] = useState(false);
  const draggedRef = useRef(false);

  return (
    <div className={`w-full py-8 relative ${className || ""}`}>
      <div className="relative mx-auto w-[420px] max-w-full min-h-[360px] flex flex-col items-center justify-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-white/5 blur-[100px]" />

        <div className="relative w-full h-[360px]">
          <div className="absolute bottom-[80px] left-1/2 -translate-x-1/2 z-10">
            {photos.map((photo, i) => {
              const offset = i - (photos.length - 1) / 2;
              const n = photos.length;

              const closedX = offset * 16;
              const closedY = -(24 + Math.abs(offset) * 12);
              const closedRotate = offset * 5;
              const closedZ = 10 + i;

              const openX = offset * SPACING;
              const openY = 0;
              const openRotate = 0;
              const openZ = 50 + (Math.round((n - 1) / 2) - Math.abs(offset));

              return (
                <motion.div
                  key={photo.id}
                  drag={isFolderOpen}
                  dragSnapToOrigin={true}
                  onDragStart={() => {
                    draggedRef.current = true;
                  }}
                  onDragEnd={(e, info) => {
                    if (info.offset.y > 100 && isFolderOpen) {
                      setIsFolderOpen(false);
                      setHoverFolder(false);
                    }
                    window.setTimeout(() => {
                      draggedRef.current = false;
                    }, 50);
                  }}
                  onClick={() => {
                    if (photo.href && !draggedRef.current) {
                      window.open(photo.href, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className={`absolute bottom-0 ${cardSurface} overflow-hidden cursor-grab active:cursor-grabbing ${isFolderOpen ? "pointer-events-auto" : "pointer-events-none"}`}
                  style={{ width: CARD_W, height: CARD_H }}
                  animate={
                    !isFolderOpen
                      ? { x: closedX, y: closedY, rotate: closedRotate, scale: 1, zIndex: closedZ }
                      : { x: openX, y: openY, rotate: openRotate, scale: 1, zIndex: openZ }
                  }
                  whileHover={isFolderOpen ? { scale: 1.06, y: openY - 10, zIndex: 100 } : {}}
                  whileDrag={isFolderOpen ? { scale: 1.1, rotate: 4, zIndex: 150 } : {}}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                  <img
                    src={photo.image}
                    alt={photo.title || "Project"}
                    className="w-full h-full object-cover object-top pointer-events-none"
                  />
                  <div className="absolute inset-x-0 top-0 flex items-center gap-1 px-2 h-4 bg-gradient-to-b from-black/70 to-transparent pointer-events-none">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  </div>
                  <div
                    className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-2 py-1.5 transition-opacity duration-300 pointer-events-none ${
                      isFolderOpen ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <span className="block text-center text-[11px] font-medium tracking-wide text-white/90">
                      {photo.title}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] max-w-[90%] h-[150px] z-20 cursor-pointer select-none"
            style={{ transformOrigin: "bottom" }}
            animate={{
              opacity: isFolderOpen ? 0 : 1,
              y: isFolderOpen ? 40 : 0,
              rotateX: hoverFolder ? -14 : 0,
              pointerEvents: isFolderOpen ? "none" : "auto",
            }}
            onMouseEnter={() => setHoverFolder(true)}
            onMouseLeave={() => setHoverFolder(false)}
            onClick={() => setIsFolderOpen(true)}
          >
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-[20px] border border-white/15 bg-white/10 backdrop-blur-3xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_32px_64px_-12px_rgba(0,0,0,0.7)]">
              <div className="absolute -top-3 left-6 h-6 w-20 rounded-t-lg border border-b-0 border-white/15 bg-white/10" />
              <Folder className="h-8 w-8 text-white/80" />
              <span className="text-sm font-medium tracking-wide text-white/90">{folderName}</span>
              <span className="text-[11px] uppercase tracking-widest text-white/40">
                {photos.length} projects
              </span>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: isFolderOpen ? 1 : 0, y: isFolderOpen ? 0 : 40 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-[11px] font-medium uppercase tracking-widest text-white/50 backdrop-blur-md pointer-events-none"
          >
            {dragHintText}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { InteractiveFolderGallery as Component };
