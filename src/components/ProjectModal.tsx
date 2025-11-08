"use client";
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export type ProjectStatus = 'completed' | 'in_progress' | 'planning';

export interface GitHubRepo {
  label: string;
  url: string;
}

export interface ProjectDetail {
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  tech: React.ReactNode[];
  techNames: string[];
  liveUrl?: string;
  githubUrl?: string;
  githubRepos?: GitHubRepo[];
  status?: ProjectStatus;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ProjectDetail | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGitHubDropdownOpen, setIsGitHubDropdownOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
      setCurrentImageIndex(0);
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
      if (event.key === 'ArrowLeft' && isOpen && project) {
        handlePrevImage();
      }
      if (event.key === 'ArrowRight' && isOpen && project) {
        handleNextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen, currentImageIndex, project]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleNextImage = () => {
    if (project && currentImageIndex < project.images.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  if (!project) return null;

  const getStatusConfig = (status?: ProjectStatus) => {
    switch (status) {
      case 'completed':
        return {
          label: 'Selesai',
          className: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-700'
        };
      case 'in_progress':
        return {
          label: 'Sedang Dikembangkan',
          className: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-700'
        };
      case 'planning':
        return {
          label: 'Perencanaan',
          className: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700'
        };
      default:
        return null;
    }
  };

  const statusConfig = getStatusConfig(project.status);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
          />
          <motion.div
            key="modal"
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="cursor-pointer absolute right-4 top-4 p-2 bg-white dark:bg-black rounded-lg text-black dark:text-white border z-10 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Image Carousel */}
              <div className="relative w-full h-[28rem] bg-gray-100 dark:bg-gray-800">
                <motion.img
                  key={currentImageIndex}
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  className="w-full h-full object-fill"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Carousel Controls */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      disabled={currentImageIndex === 0}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-black/80 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white dark:hover:bg-black transition-all"
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={handleNextImage}
                      disabled={currentImageIndex === project.images.length - 1}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 dark:bg-black/80 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white dark:hover:bg-black transition-all"
                      aria-label="Next image"
                    >
                      <ChevronRight size={24} />
                    </button>

                    {/* Image Indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? 'bg-white w-8'
                              : 'bg-white/50 hover:bg-white/75'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  {statusConfig && (
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusConfig.className}`}>
                      {statusConfig.label}
                    </span>
                  )}
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {project.longDescription}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.techNames.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                      >
                        <span className="text-xl dark:text-white">{project.tech[index]}</span>
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <button
                    disabled={!project.liveUrl}
                    onClick={() => project.liveUrl && window.open(project.liveUrl, '_blank')}
                    className={`flex items-center gap-2 px-6 py-1 rounded-md font-semibold transition-colors ${
                      project.liveUrl
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <ExternalLink size={18} />
                    Visit Live Site
                  </button>
                  {project.githubRepos && project.githubRepos.length > 0 ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsGitHubDropdownOpen(!isGitHubDropdownOpen)}
                        onBlur={() => setTimeout(() => setIsGitHubDropdownOpen(false), 150)}
                        className="cursor-pointer flex items-center gap-2 px-6 py-1 bg-gray-900 dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 text-white rounded-md font-semibold transition-colors"
                      >
                        <Github size={18} />
                        View on GitHub
                        <motion.svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="ml-1"
                          animate={{ rotate: isGitHubDropdownOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path
                            d="M6 9L2 5H10L6 9Z"
                            fill="currentColor"
                          />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {isGitHubDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute bottom-full mb-2 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[200px]"
                          >
                            {project.githubRepos.map((repo, index) => (
                              <a
                                key={index}
                                href={repo.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-white font-medium text-sm"
                                onMouseDown={(e) => e.preventDefault()}
                              >
                                {repo.label}
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-1 bg-gray-900 dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100 text-white rounded-md font-semibold transition-colors"
                    >
                      <Github size={18} />
                      View on GitHub
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;
