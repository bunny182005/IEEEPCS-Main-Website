import React, { useRef, useEffect, useState } from 'react';

const Crazy = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    
    if (canvas && container) {
      const ctx = canvas.getContext('2d');
      
      // Set canvas size to match container
      const setCanvasSize = () => {
        const rect = container.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
      };

      setCanvasSize();
      
      // Initialize drawing context
      ctx.strokeStyle = '#000000';
      ctx.lineWidth = 2;
      ctx.lineCap = 'round';
      setContext(ctx);

      // Handle window resize
      const handleResize = () => {
        setCanvasSize();
        // Re-initialize context after resize
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
      };

      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const getCanvasCoordinates = (clientX, clientY) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY
    };
  };

  const startDrawing = (e) => {
    if (!context) return;
    
    const coords = getCanvasCoordinates(e.clientX, e.clientY);
    context.beginPath();
    context.moveTo(coords.x, coords.y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing || !context) return;

    const coords = getCanvasCoordinates(e.clientX, e.clientY);
    context.lineTo(coords.x, coords.y);
    context.stroke();

    // Add embroidery effect - create small cross stitches
    context.save();
    context.strokeStyle = '#ff6b6b';
    ctx.lineWidth = 1;
    context.moveTo(coords.x - 3, coords.y);
    context.lineTo(coords.x + 3, coords.y);
    context.moveTo(coords.x, coords.y - 3);
    context.lineTo(coords.x, coords.y + 3);
    context.stroke();
    context.restore();
  };

  const stopDrawing = () => {
    if (!context) return;
    context.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    if (!context) return;
    const canvas = canvasRef.current;
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    e.preventDefault();
    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const coords = getCanvasCoordinates(touch.clientX, touch.clientY);
      context.beginPath();
      context.moveTo(coords.x, coords.y);
      setIsDrawing(true);
    }
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    if (isDrawing && e.touches.length === 1) {
      const touch = e.touches[0];
      const coords = getCanvasCoordinates(touch.clientX, touch.clientY);
      context.lineTo(coords.x, coords.y);
      context.stroke();

      // Add embroidery effect for touch
      context.save();
      context.strokeStyle = '#ff6b6b';
      context.lineWidth = 1;
      context.moveTo(coords.x - 3, coords.y);
      context.lineTo(coords.x + 3, coords.y);
      context.moveTo(coords.x, coords.y - 3);
      context.lineTo(coords.x, coords.y + 3);
      context.stroke();
      context.restore();
    }
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    context.closePath();
    setIsDrawing(false);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full bg-white border-2 border-gray-300 rounded-lg overflow-hidden"
    >
      <h1 className='font-bold text-7xl absolute top-4 left-4 px-4 py-2 z-10 text-black'>
        Your Craftship
      </h1>
    
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full cursor-crosshair bg-white"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
      
      <button
        onClick={clearCanvas}
        className="absolute top-4 right-4 px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 font-medium z-10 text-lg"
      >
        Clear
      </button>
    </div>
  );
};

export default Crazy;