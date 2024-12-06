<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Personal Portfolio</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 20px;
    }
    h1, h2, h3, h4 {
      color: #333;
    }
    a {
      color: #1a73e8;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    .technologies {
      display: flex;
      gap: 10px;
      margin-top: 10px;
    }
    .technologies img {
      width: 40px;
      height: 40px;
    }
    .preview img {
      margin-top: 20px;
      width: 100%;
      max-width: 600px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <h1>Personal Portfolio: Inspired by Windows 98 Design</h1>
  <h4>
    Everything here is coded by me, except for the dragging functionality. 
    For that, I used <a href="https://www.npmjs.com/package/react-draggable?activeTab=readme#draggable-usage" 
    target="_blank" rel="noreferrer">react-draggable</a>. All other styles and features were built from scratch!
  </h4>

  <h3>Note:</h3>
  <p>
    Some features may not function optimally on smaller screen sizes. I'm actively working on improvements!
  </p>

  <h2>Check out my live portfolio:</h2>
  <a href="https://your-portfolio-link.netlify.app/" target="_blank">
    https://your-portfolio-link.netlify.app/
  </a>

  <h3>Technologies Used:</h3>
  <div class="technologies">
    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React">
    </a>
    <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="SASS">
    </a>
    <!-- Add more technology icons here if needed -->
  </div>

  <div class="preview">
    <h3>Preview:</h3>
    <img src="src/assets/Github-Preview.png" alt="GitHub Preview">
  </div>
</body>
</html>

