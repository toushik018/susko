/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import React, { useState, useEffect, useRef } from 'react';
import styles from './Terminal.module.css';

interface Command {
  command: string;
  output: string | JSX.Element;
}

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([]);
  const [currentPath, setCurrentPath] = useState('visitor@susko:~$');
  const terminalRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const availableCommands = {
    help: () => (
      <div>
        Available commands:
        • about - Learn about Susko
        • services - Our services
        • projects - View our projects
        • contact - Get in touch
        • clear - Clear terminal
        • help - Show this help message
        
        Type any command to navigate to the corresponding section.
      </div>
    ),
    about: () => {
      scrollToSection('about');
      return (
        <div>
          Navigating to About section...
          <br />
          Type &apos;help&apos; to see other available commands.
        </div>
      );
    },
    services: () => {
      scrollToSection('services');
      return (
        <div>
          Navigating to Services section...
          <br />
          Type &apos;help&apos; to see other available commands.
        </div>
      );
    },
    projects: () => {
      scrollToSection('projects');
      return (
        <div>
          Navigating to Projects section...
          <br />
          Type &apos;help&apos; to see other available commands.
        </div>
      );
    },
    contact: () => {
      scrollToSection('contact');
      return (
        <div>
          Navigating to Contact section...
          <br />
          Type &apos;help&apos; to see other available commands.
        </div>
      );
    },
    clear: () => '',
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output: string | JSX.Element = 'Command not found. Type "help" for available commands.';

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmedCmd in availableCommands) {
      output = availableCommands[trimmedCmd as keyof typeof availableCommands]();
    }

    setHistory([...history, { command: cmd, output }]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    handleCommand('help');
  }, []);

  return (
    <div className={styles.terminal}>
      <div className={styles.terminalHeader}>
        <div className={styles.terminalControls}>
          <span className={styles.control}></span>
          <span className={styles.control}></span>
          <span className={styles.control}></span>
        </div>
        <div className={styles.terminalTitle}>Susko Terminal</div>
      </div>
      <div className={styles.terminalBody} ref={terminalRef}>
        {history.map((item, index) => (
          <div key={index} className={styles.commandBlock}>
            <div className={styles.commandLine}>
              <span className={styles.prompt}>{currentPath}</span>
              <span className={styles.commandText}>{item.command}</span>
            </div>
            <div className={styles.output}>{item.output}</div>
          </div>
        ))}
        <div className={styles.currentLine}>
          <span className={styles.prompt}>{currentPath}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className={styles.input}
            autoFocus
            spellCheck="false"
            aria-label="Terminal input"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
