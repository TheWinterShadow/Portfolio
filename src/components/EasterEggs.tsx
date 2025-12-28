'use client';

import { useEffect, useState } from 'react';

export default function EasterEggs() {
  const [konamiCode, setKonamiCode] = useState<string[]>([]);
  const [matrixActive, setMatrixActive] = useState(false);
  const [terminalMode, setTerminalMode] = useState(false);

  const konamiSequence = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'KeyB',
    'KeyA',
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Konami Code
      setKonamiCode((prev) => {
        const newCode = [...prev, e.code].slice(-konamiSequence.length);
        if (JSON.stringify(newCode) === JSON.stringify(konamiSequence)) {
          setMatrixActive(true);
          setTimeout(() => setMatrixActive(false), 10000);
          return [];
        }
        return newCode;
      });

      // Terminal Mode (Ctrl+Shift+T)
      if (e.ctrlKey && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        setTerminalMode((prev) => !prev);
      }

      // Help command in terminal mode
      if (terminalMode && e.key === 'Enter') {
        const input = (e.target as HTMLElement).textContent;
        if (input?.toLowerCase().includes('help')) {
          console.log(`
╔══════════════════════════════════════╗
║   The Winter Shadow - Terminal Mode  ║
╠══════════════════════════════════════╣
║  Commands:                           ║
║  - help: Show this help message      ║
║  - projects: List all projects       ║
║  - skills: Show tech stack           ║
║  - contact: Get contact info         ║
║  - clear: Clear terminal            ║
╚══════════════════════════════════════╝
          `);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [terminalMode]);

  useEffect(() => {
    if (terminalMode) {
      document.body.classList.add('terminal-mode');
    } else {
      document.body.classList.remove('terminal-mode');
    }
  }, [terminalMode]);

  // Matrix Rain Effect
  useEffect(() => {
    if (!matrixActive) return;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const matrixContainer = document.createElement('div');
    matrixContainer.className = 'matrix-rain';
    document.body.appendChild(matrixContainer);

    const columns = Math.floor(window.innerWidth / 20);
    const drops: number[] = Array(columns).fill(0);

    const interval = setInterval(() => {
      for (let i = 0; i < columns; i++) {
        if (Math.random() > 0.975) {
          const char = document.createElement('div');
          char.className = 'matrix-char';
          char.textContent = chars[Math.floor(Math.random() * chars.length)];
          char.style.left = `${i * 20}px`;
          char.style.animationDuration = `${Math.random() * 3 + 2}s`;
          char.style.opacity = Math.random().toString();
          matrixContainer.appendChild(char);

          setTimeout(() => char.remove(), 5000);
        }
      }
    }, 50);

    return () => {
      clearInterval(interval);
      matrixContainer.remove();
    };
  }, [matrixActive]);


  return null;
}

