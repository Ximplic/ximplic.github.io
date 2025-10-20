// Lightweight interactions for the single-page site

document.addEventListener('DOMContentLoaded', () => {
  // set year
  document.getElementById('year').textContent = new Date().getFullYear();

  // logo spin when visible
  const logo = document.querySelector('.logo');
  if(logo){
    const obsLogo = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if(e.isIntersecting) logo.classList.add('spin');
        else logo.classList.remove('spin');
      });
    }, {threshold: 0.2});
    obsLogo.observe(logo);
  }

  // reveal-on-scroll
  const reveals = document.querySelectorAll('.reveal');
  const ro = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold: 0.12});
  reveals.forEach(r => ro.observe(r));

  // memory-grid demo
  const grid = document.getElementById('memoryGrid');
  if(grid){
    const cols = 8, rows = 4;
    for(let i=0;i<cols*rows;i++){
      const cell = document.createElement('div');
      cell.className = 'memory-cell';
      grid.appendChild(cell);
    }
    const cells = Array.from(grid.children);
    function pulsePattern(){
      const count = 6 + Math.floor(Math.random()*8);
      cells.forEach(c => c.classList.remove('on'));
      for(let i=0;i<count;i++){
        const idx = Math.floor(Math.random()*cells.length);
        const c = cells[idx];
        c.classList.add('on');
        setTimeout(()=> c.classList.remove('on'), 600 + Math.random()*900);
      }
    }
    const interval = setInterval(pulsePattern, 1100);
    window.addEventListener('beforeunload', () => clearInterval(interval));
  }

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const a = btn.nextElementSibling;
      const open = a.style.display === 'block';
      // close all
      document.querySelectorAll('.faq-a').forEach(x => x.style.display = 'none');
      // toggle selected
      a.style.display = open ? 'none' : 'block';
    });
  });

  // Contact form submission (demo)
  const contactBtn = document.getElementById('contactBtn');
  if(contactBtn){
    contactBtn.addEventListener('click', () => {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const interest = document.getElementById('interest').value;
      if(!name || !email){
        contactBtn.textContent = 'Please add name & email';
        setTimeout(()=> contactBtn.textContent = 'Send request', 1600);
        return;
      }
      contactBtn.disabled = true;
      contactBtn.textContent = 'Sending…';
      // Replace this with real POST to your API or marketing tool.
      setTimeout(()=> {
        contactBtn.textContent = 'Sent ✓';
      }, 900);
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if(href.length > 1){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    });
  });

  // Mobile Navigation Functionality
  const mobileNavToggle = document.getElementById('mobileNavToggle');
  const mobileNavMenu = document.getElementById('mobileNavMenu');
  
  if (mobileNavToggle && mobileNavMenu) {
    let isMobileNavOpen = false;
    
    // Initialize - ensure menu is closed on load
    mobileNavToggle.classList.remove('active');
    mobileNavMenu.classList.remove('active');

    mobileNavToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation(); // Prevent event from bubbling to document
      isMobileNavOpen = !isMobileNavOpen;
      
      console.log('Mobile nav toggled:', isMobileNavOpen); // Debug log
      
      if (isMobileNavOpen) {
        mobileNavToggle.classList.add('active');
        mobileNavMenu.classList.add('active');
      } else {
        mobileNavToggle.classList.remove('active');
        mobileNavMenu.classList.remove('active');
      }
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
      if (isMobileNavOpen && !mobileNavToggle.contains(e.target) && !mobileNavMenu.contains(e.target)) {
        isMobileNavOpen = false;
        mobileNavToggle.classList.remove('active');
        mobileNavMenu.classList.remove('active');
      }
    });

    // Close mobile nav when clicking on a nav link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        isMobileNavOpen = false;
        mobileNavToggle.classList.remove('active');
        mobileNavMenu.classList.remove('active');
      });
    });
  }

  // Create circuit nodes background
  const createCircuitNodes = () => {
    const container = document.createElement('div');
    container.className = 'circuit-nodes';
    
    // Create scattered circuit nodes
    for (let i = 0; i < 25; i++) {
      const node = document.createElement('div');
      node.className = 'circuit-node';
      node.style.left = Math.random() * 100 + '%';
      node.style.top = Math.random() * 100 + '%';
      node.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(node);
    }
    
    document.body.appendChild(container);
  };

  // Create data flow lines
  const createDataFlow = () => {
    const container = document.createElement('div');
    container.className = 'data-flow';
    
    // Horizontal flow lines
    for (let i = 0; i < 8; i++) {
      const line = document.createElement('div');
      line.className = 'flow-line';
      line.style.top = Math.random() * 100 + '%';
      line.style.width = '150px';
      line.style.animationDelay = Math.random() * 3 + 's';
      container.appendChild(line);
    }
    
    // Vertical flow lines
    for (let i = 0; i < 6; i++) {
      const line = document.createElement('div');
      line.className = 'flow-line vertical';
      line.style.left = Math.random() * 100 + '%';
      line.style.animationDelay = Math.random() * 4 + 's';
      container.appendChild(line);
    }
    
    document.body.appendChild(container);
  };

  // Initialize background animations
  createCircuitNodes();
  createDataFlow();

  // Recreate nodes periodically for variety
  setInterval(createCircuitNodes, 15000);

  // EDA Design Automation Interface
  const memoryArray = document.getElementById('memoryArray');
  if (memoryArray) {
    const cols = 12, rows = 8;
    const cells = [];
    
    // Create memory array cells
    for (let i = 0; i < cols * rows; i++) {
      const cell = document.createElement('div');
      cell.className = 'memory-cell';
      cell.dataset.index = i;
      memoryArray.appendChild(cell);
      cells.push(cell);
    }
    
    // Simulate automated placement and routing
    let placementProgress = 0;
    const totalCells = cells.length;
    
    function simulateEDAProcess() {
      // Reset all cells
      cells.forEach(cell => {
        cell.classList.remove('placed', 'computing');
      });
      
      placementProgress = 0;
      
      // Animate placement process
      const placementInterval = setInterval(() => {
        if (placementProgress < totalCells * 0.8) {
          const cellIndex = Math.floor(Math.random() * totalCells);
          const cell = cells[cellIndex];
          
          if (!cell.classList.contains('placed')) {
            cell.classList.add('placed');
            placementProgress++;
            
            // Update stats
            document.getElementById('cellsPlaced').textContent = placementProgress;
          }
        } else {
          clearInterval(placementInterval);
          
          // Start compute simulation
          setTimeout(() => {
            simulateComputing();
          }, 1000);
        }
      }, 150);
    }
    
    function simulateComputing() {
      const placedCells = cells.filter(cell => cell.classList.contains('placed'));
      
      function computeCycle() {
        // Clear previous computing state
        cells.forEach(cell => cell.classList.remove('computing'));
        
        // Randomly select cells for computing
        const numComputing = 8 + Math.floor(Math.random() * 12);
        for (let i = 0; i < numComputing; i++) {
          const randomCell = placedCells[Math.floor(Math.random() * placedCells.length)];
          if (randomCell) {
            randomCell.classList.add('computing');
          }
        }
      }
      
      // Run compute cycles
      computeCycle();
      setInterval(computeCycle, 2000);
    }
    
    // Layer tab functionality (Digital/Analog/Mixed)
    const layerTabs = document.querySelectorAll('.layer-tab');
    layerTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        layerTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Change visualization based on implementation type
        const layer = tab.dataset.layer;
        document.getElementById('routingProgress').textContent = tab.textContent;
        
        if (layer === 'digital') {
          // Digital implementation - clean, structured layout
          cells.forEach(cell => {
            if (cell.classList.contains('placed')) {
              cell.style.borderColor = 'var(--accent2)';
              cell.classList.remove('computing');
            }
          });
        } else if (layer === 'analog') {
          // Analog implementation - more organic, flowing
          cells.forEach(cell => {
            if (cell.classList.contains('placed')) {
              cell.style.borderColor = 'var(--accent1)';
              cell.classList.add('computing');
            }
          });
        } else if (layer === 'mixed') {
          // Mixed-signal - combination approach
          cells.forEach((cell, index) => {
            if (cell.classList.contains('placed')) {
              cell.style.borderColor = index % 2 ? 'var(--accent1)' : 'var(--accent2)';
              if (index % 3 === 0) cell.classList.add('computing');
            }
          });
        }
      });
    });
    
    // Start the EDA simulation
    simulateEDAProcess();
    
    // Restart simulation every 20 seconds
    setInterval(simulateEDAProcess, 20000);
    
    // Automation stats cycling
    const statuses = ['Mapped', 'Optimized', 'Ready'];
    const implementations = ['Digital', 'Analog', 'Mixed'];
    const technologies = ['SRAM', 'RRAM', 'FeRAM', 'MRAM'];
    
    let statusIndex = 0;
    let implIndex = 0;
    let techIndex = 0;
    
    setInterval(() => {
      document.getElementById('cellsPlaced').textContent = statuses[statusIndex];
      document.getElementById('routingProgress').textContent = implementations[implIndex];
      document.getElementById('powerOpt').textContent = technologies[techIndex];
      
      statusIndex = (statusIndex + 1) % statuses.length;
      implIndex = (implIndex + 1) % implementations.length;
      techIndex = (techIndex + 1) % technologies.length;
    }, 3000);
  }


  // Application Mapper Demo
  const mapperDemo = document.getElementById('mapperDemo');
  if (mapperDemo) {
    const applications = [
      { algo: 'CNN Algorithm', design: 'Convolution CIM', layout: 'Array Layout' },
      { algo: 'Matrix Multiply', design: 'Crossbar CIM', layout: 'Optimized Layout' },
      { algo: 'Neural Network', design: 'Synaptic CIM', layout: 'Memory Grid' },
      { algo: 'ML Inference', design: 'PIM Architecture', layout: 'Hybrid Layout' },
      { algo: 'AI Accelerator', design: 'Parallel CIM', layout: 'Tiled Layout' }
    ];
    
    let appIndex = 0;
    
    function cycleApplications() {
      const app = applications[appIndex];
      const inputLayer = mapperDemo.querySelector('.input-layer');
      const outputArch = mapperDemo.querySelector('.output-arch');
      const finalLayout = mapperDemo.querySelector('.final-layout');
      const mappingTexts = mapperDemo.querySelectorAll('.mapping-text');
      
      // Reset to initial state
      inputLayer.textContent = app.algo;
      outputArch.textContent = '...';
      outputArch.style.opacity = '0.5';
      finalLayout.textContent = '...';
      finalLayout.style.opacity = '0.5';
      mappingTexts[0].textContent = 'Mapping...';
      mappingTexts[1].textContent = 'Generating...';
      
      // Step 1: Algorithm to CIM Design
      setTimeout(() => {
        mappingTexts[0].textContent = 'Analyzing...';
      }, 800);
      
      setTimeout(() => {
        outputArch.textContent = app.design;
        outputArch.style.opacity = '1';
        mappingTexts[0].textContent = 'Mapped!';
      }, 1600);
      
      // Step 2: CIM Design to Layout
      setTimeout(() => {
        mappingTexts[1].textContent = 'Optimizing...';
      }, 2400);
      
      setTimeout(() => {
        finalLayout.textContent = app.layout;
        finalLayout.style.opacity = '1';
        mappingTexts[1].textContent = 'Complete!';
      }, 3200);
      
      appIndex = (appIndex + 1) % applications.length;
    }
    
    // Start the cycle
    cycleApplications();
    setInterval(cycleApplications, 6000);
  }
  
  // Technology Selector
  const techOptions = document.querySelectorAll('.tech-option');
  if (techOptions.length > 0) {
    let techIndex = 0;
    const technologies = ['sram', 'rram', 'feram', 'mram', 'pcm'];
    
    function cycleTechnologies() {
      techOptions.forEach(option => option.classList.remove('active'));
      
      const currentTech = technologies[techIndex];
      const currentOption = document.querySelector(`[data-tech="${currentTech}"]`);
      if (currentOption) {
        currentOption.classList.add('active');
      }
      
      techIndex = (techIndex + 1) % technologies.length;
    }
    
    // Auto-cycle every 2.5 seconds for more technologies
    setInterval(cycleTechnologies, 2500);
    
    // Manual selection
    techOptions.forEach(option => {
      option.addEventListener('click', () => {
        techOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
      });
    });
  }
  
  // Tapeout Timeline Animation
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (timelineItems.length > 0) {
    let currentStep = 0;
    
    function animateTimeline() {
      // Reset all items
      timelineItems.forEach(item => {
        item.classList.remove('completed', 'active');
      });
      
      // Set completed and active states
      for (let i = 0; i < currentStep; i++) {
        timelineItems[i].classList.add('completed');
      }
      
      if (currentStep < timelineItems.length) {
        timelineItems[currentStep].classList.add('active');
      }
      
      currentStep = (currentStep + 1) % (timelineItems.length + 1);
      
      // Reset when reaching the end
      if (currentStep === timelineItems.length) {
        setTimeout(() => {
          currentStep = 0;
        }, 2000);
      }
    }
    
    // Start timeline animation
    animateTimeline();
    setInterval(animateTimeline, 2500);
  }

  // Enhanced contact form handling with Formspree
  const contactForm = document.getElementById('contactForm');
  const sendBtn = document.getElementById('sendBtn');
  const clearBtn = document.getElementById('clearBtn');
  
  // Form submission
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;
    
    // Validation
    if (!name || !email || !interest) {
      sendBtn.textContent = 'Please fill required fields';
      sendBtn.style.backgroundColor = 'var(--accent2)';
      setTimeout(() => {
        sendBtn.textContent = 'Send Message';
        sendBtn.style.backgroundColor = '';
      }, 2000);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      sendBtn.textContent = 'Please enter valid email';
      sendBtn.style.backgroundColor = 'var(--accent2)';
      setTimeout(() => {
        sendBtn.textContent = 'Send Message';
        sendBtn.style.backgroundColor = '';
      }, 2000);
      return;
    }
    
    // Send to Formspree
    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending...';
    
    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        sendBtn.textContent = 'Message Sent ✓';
        sendBtn.style.backgroundColor = 'var(--accent1)';
        
        // Reset form after delay
        setTimeout(() => {
          contactForm.reset();
          sendBtn.disabled = false;
          sendBtn.textContent = 'Send Message';
          sendBtn.style.backgroundColor = '';
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      sendBtn.textContent = 'Error! Try again';
      sendBtn.style.backgroundColor = '#e74c3c';
      setTimeout(() => {
        sendBtn.disabled = false;
        sendBtn.textContent = 'Send Message';
        sendBtn.style.backgroundColor = '';
      }, 3000);
    }
  });
  
  // Clear form button
  clearBtn.addEventListener('click', () => {
    contactForm.reset();
    sendBtn.disabled = false;
    sendBtn.textContent = 'Send Message';
    sendBtn.style.backgroundColor = '';
  });
});
