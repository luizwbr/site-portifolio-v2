import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const SpaceBackground = ({ isMobile = false }) => {
  const mountRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    // Em mobile, não inicializar Three.js - usar apenas CSS
    if (isMobile) return;
    
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Configuração da cena, câmera e renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      5000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Posição da câmera
    camera.position.z = 100;

    // Controles de mouse para rotação da câmera
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    const cameraRotation = { x: 0, y: 0 };
    const rotationSpeed = 0.005;
    let zoomLevel = 100; // Distância inicial da câmera
    const minZoom = 20;
    const maxZoom = 3000;

    // Raycaster para detecção de hover
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const interactiveObjects = [];

    // Criar estrelas com tamanhos variados
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      vertexColors: true
    });

    const starsVertices = [];
    const starsSizes = [];
    const starsColors = [];
    
    for (let i = 0; i < 10000; i++) {
      const x = (Math.random() - 0.5) * 2000;
      const y = (Math.random() - 0.5) * 2000;
      const z = (Math.random() - 0.5) * 2000;
      starsVertices.push(x, y, z);
      
      // Algumas estrelas são muito mais brilhantes (supergigantes)
      const isBright = Math.random() > 0.950;
      const size = isBright ? Math.random() * 3 + 2 : Math.random() * 0.5 + 0.3;
      starsSizes.push(size);
      
      // Cores variadas para as estrelas (brancas, azuis, amarelas, vermelhas)
      let color;
      if (isBright) {
        const colorType = Math.random();
        if (colorType < 0.3) color = new THREE.Color(0xaaccff); // Azul brilhante
        else if (colorType < 0.6) color = new THREE.Color(0xffffaa); // Amarela
        else color = new THREE.Color(0xffaaaa); // Vermelha
      } else {
        color = new THREE.Color(0xffffff);
      }
      starsColors.push(color.r, color.g, color.b);
    }

    starsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );
    starsGeometry.setAttribute(
      'size',
      new THREE.Float32BufferAttribute(starsSizes, 1)
    );
    starsGeometry.setAttribute(
      'color',
      new THREE.Float32BufferAttribute(starsColors, 3)
    );
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Criar nebulosas realistas (inspiradas em nebulosas reais)
    const nebulaeGeometry = new THREE.BufferGeometry();
    const nebulaeMaterial = new THREE.PointsMaterial({
      size: 4,
      transparent: true,
      opacity: 0.8,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });

    const nebulaeVertices = [];
    const nebulaeColors = [];
    const nebulaeSizes = [];
    
    // Cores realistas de nebulosas (baseadas na imagem)
    const centerCyan = new THREE.Color(0x00ffff);     // Ciano brilhante (centro)
    const brightBlue = new THREE.Color(0x4da6ff);     // Azul brilhante
    const deepBlue = new THREE.Color(0x1a4d80);       // Azul profundo
    const magenta = new THREE.Color(0xff1a8c);        // Magenta/rosa
    const darkPurple = new THREE.Color(0x660066);     // Roxo escuro
    const burgundy = new THREE.Color(0x800020);       // Bordô (bordas)

    // Criar nebulosas volumosas e orgânicas
    const numNebulae = 5; // Número de nebulosas
    
    for (let n = 0; n < numNebulae; n++) {
      // Centro da nebulosa (bem mais distante da câmera)
      const centerX = (Math.random() - 0.5) * 2500;
      const centerY = (Math.random() - 0.5) * 2500;
      const centerZ = (Math.random() - 0.5) * 2500;
      
      // Tamanho da nebulosa (mais compacta)
      const nebulaSize = Math.random() * 20 + 10;
      const particlesPerNebula = Math.floor(Math.random() * 600) + 4;
      
      for (let i = 0; i < particlesPerNebula; i++) {
        // Distribuição esférica com densidade maior no centro
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);
        
        // Usar distribuição exponencial para densidade no centro
        const r = Math.pow(Math.random(), 0.5) * nebulaSize;
        
        const x = centerX + r * Math.sin(phi) * Math.cos(theta);
        const y = centerY + r * Math.sin(phi) * Math.sin(theta);
        const z = centerZ + r * Math.cos(phi);
        
        nebulaeVertices.push(x, y, z);
        
        // Gradiente de cor baseado na distância do centro
        const distanceFromCenter = r / nebulaSize;
        let color;
        
        if (distanceFromCenter < 0.15) {
          // Centro: ciano brilhante intenso
          color = centerCyan.clone();
        } else if (distanceFromCenter < 0.35) {
          // Próximo ao centro: mistura de ciano e azul brilhante
          const factor = (distanceFromCenter - 0.15) / 0.2;
          color = centerCyan.clone().lerp(brightBlue, factor);
        } else if (distanceFromCenter < 0.55) {
          // Camada intermediária: azul profundo
          const factor = (distanceFromCenter - 0.35) / 0.2;
          color = brightBlue.clone().lerp(deepBlue, factor);
        } else if (distanceFromCenter < 0.75) {
          // Camada externa: magenta/rosa
          const factor = (distanceFromCenter - 0.55) / 0.2;
          color = deepBlue.clone().lerp(magenta, factor);
        } else if (distanceFromCenter < 0.9) {
          // Borda: roxo escuro
          const factor = (distanceFromCenter - 0.75) / 0.15;
          color = magenta.clone().lerp(darkPurple, factor);
        } else {
          // Borda externa: bordô escuro
          const factor = (distanceFromCenter - 0.9) / 0.1;
          color = darkPurple.clone().lerp(burgundy, factor);
        }
        
        nebulaeColors.push(color.r, color.g, color.b);
        
        // Tamanhos maiores no centro, menores nas bordas
        const size = (1 - distanceFromCenter * 0.7) * (Math.random() * 2 + 2);
        nebulaeSizes.push(size);
      }
    }

    nebulaeGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(nebulaeVertices, 3)
    );
    nebulaeGeometry.setAttribute(
      'color',
      new THREE.Float32BufferAttribute(nebulaeColors, 3)
    );
    nebulaeGeometry.setAttribute(
      'size',
      new THREE.Float32BufferAttribute(nebulaeSizes, 1)
    );
    const nebulae = new THREE.Points(nebulaeGeometry, nebulaeMaterial);
    scene.add(nebulae);


    // Criar buracos negros (singularidades)
    const blackHoles = [];
    for (let i = 0; i < 1; i++) {
      const blackHoleGroup = new THREE.Group();
      
      const blackHoleSize = Math.random() * 8 + 6; // Tamanho entre 6 e 14
      
      // Core do buraco negro (esfera escura)
      const coreGeometry = new THREE.SphereGeometry(blackHoleSize, 32, 32);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.98
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      blackHoleGroup.add(core);
      
      // Disco de acreção interno (anel laranja brilhante)
      const ringGeometry = new THREE.TorusGeometry(blackHoleSize * 1.8, blackHoleSize * 0.3, 16, 100);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0xff6600,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
      });
      const accretionDisk = new THREE.Mesh(ringGeometry, ringMaterial);
      accretionDisk.rotation.x = Math.PI / 2;
      blackHoleGroup.add(accretionDisk);
      
      // Disco externo (mais fraco e maior)
      const outerRingGeometry = new THREE.TorusGeometry(blackHoleSize * 2.5, blackHoleSize * 0.2, 16, 100);
      const outerRingMaterial = new THREE.MeshBasicMaterial({
        color: 0xff9944,
        transparent: true,
        opacity: 0.5,
        side: THREE.DoubleSide
      });
      const outerDisk = new THREE.Mesh(outerRingGeometry, outerRingMaterial);
      outerDisk.rotation.x = Math.PI / 2;
      blackHoleGroup.add(outerDisk);
      
      // Posição mais espalhada e visível
      const distance = Math.random() * 800 + 300; // Entre 300 e 1100
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      blackHoleGroup.position.x = distance * Math.sin(phi) * Math.cos(theta);
      blackHoleGroup.position.y = distance * Math.sin(phi) * Math.sin(theta);
      blackHoleGroup.position.z = distance * Math.cos(phi);
      
      // Adicionar metadados para tooltip
      blackHoleGroup.userData = {
        type: 'Buraco Negro',
        size: blackHoleSize.toFixed(1),
        hasRings: false,
        description: 'Singularidade gravitacional'
      };
      
      scene.add(blackHoleGroup);
      blackHoles.push(blackHoleGroup);
      interactiveObjects.push(core); // Adicionar para detecção de hover
      core.userData.parent = blackHoleGroup;
    }

    // Criar planetas com anéis (com alta variabilidade)
    const planets = [];
    const numPlanets = Math.floor(Math.random() * 8) + 1; // Entre 1 e 8 planetas
    
    for (let i = 0; i < numPlanets; i++) {
      const planetGroup = new THREE.Group();
      
      // Tamanho variado dos planetas
      const planetSize = Math.random() * 12 + 3;
      const planetGeometry = new THREE.SphereGeometry(planetSize, 32, 32);
      
      // Gerar cores aleatórias para cada planeta (não apenas de uma lista fixa)
      const hue = Math.random();
      const saturation = Math.random() * 0.5 + 0.3; // 0.3 a 0.8
      const lightness = Math.random() * 0.3 + 0.3;  // 0.3 a 0.6
      const planetColor = new THREE.Color().setHSL(hue, saturation, lightness);
      
      const planetMaterial = new THREE.MeshBasicMaterial({
        color: planetColor,
        transparent: true,
        opacity: 0.8
      });
      const planet = new THREE.Mesh(planetGeometry, planetMaterial);
      planetGroup.add(planet);
      
      // Apenas 30% dos planetas têm anéis
      if (Math.random() > 0.7) {
        const ringGeometry = new THREE.RingGeometry(planetSize * 1.5, planetSize * 2.2, 64);
        
        // Cores variadas para os anéis
        const ringHue = Math.random();
        const ringColor = new THREE.Color().setHSL(ringHue, 0.3, 0.6);
        
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: ringColor,
          transparent: true,
          opacity: Math.random() * 0.3 + 0.4, // Opacidade variável
          side: THREE.DoubleSide
        });
        const rings = new THREE.Mesh(ringGeometry, ringMaterial);
        rings.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.5; // Inclinação variada
        planetGroup.add(rings);
      }
      
      // Posições bem mais espalhadas e variadas
      const distance = Math.random() * 1200 + 200; // Distância entre 200 e 1400
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      planetGroup.position.x = distance * Math.sin(phi) * Math.cos(theta);
      planetGroup.position.y = distance * Math.sin(phi) * Math.sin(theta);
      planetGroup.position.z = distance * Math.cos(phi);
      
      // Rotação aleatória inicial
      planetGroup.rotation.x = Math.random() * Math.PI * 2;
      planetGroup.rotation.y = Math.random() * Math.PI * 2;
      planetGroup.rotation.z = Math.random() * Math.PI * 2;
      
      // Adicionar metadados para tooltip
      const hasRings = planetGroup.children.length > 1;
      planetGroup.userData = {
        type: 'Planeta',
        size: planetSize.toFixed(1),
        hasRings: hasRings,
        color: `#${planetColor.getHexString()}`,
        description: hasRings ? 'Planeta com anéis' : 'Planeta rochoso'
      };
      
      scene.add(planetGroup);
      planets.push(planetGroup);
      interactiveObjects.push(planet); // Adicionar para detecção de hover
      planet.userData.parent = planetGroup;
    }

    // Criar asteroides (pontos pequenos em movimento rápido)
    const asteroids = [];
    const asteroidGeometry = new THREE.SphereGeometry(0.3, 8, 8);
    const asteroidMaterial = new THREE.MeshBasicMaterial({
      color: 0x888888,
      transparent: true,
      opacity: 0.9
    });

    const createAsteroid = () => {
      const asteroid = new THREE.Mesh(asteroidGeometry, asteroidMaterial);
      
      // Posição inicial aleatória nas bordas
      const side = Math.floor(Math.random() * 4);
      if (side === 0) { // esquerda
        asteroid.position.x = -200;
        asteroid.position.y = (Math.random() - 0.5) * 400;
      } else if (side === 1) { // direita
        asteroid.position.x = 200;
        asteroid.position.y = (Math.random() - 0.5) * 400;
      } else if (side === 2) { // topo
        asteroid.position.x = (Math.random() - 0.5) * 400;
        asteroid.position.y = 200;
      } else { // baixo
        asteroid.position.x = (Math.random() - 0.5) * 400;
        asteroid.position.y = -200;
      }
      asteroid.position.z = (Math.random() - 0.5) * 400;
      
      // Velocidade aleatória
      asteroid.userData.velocity = {
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4,
        z: (Math.random() - 0.5) * 2
      };
      
      asteroid.userData.lifetime = 0;
      asteroid.userData.maxLifetime = Math.random() * 200 + 100;
      
      // Metadados para tooltip
      const speed = Math.sqrt(
        asteroid.userData.velocity.x ** 2 + 
        asteroid.userData.velocity.y ** 2 + 
        asteroid.userData.velocity.z ** 2
      );
      asteroid.userData.type = 'Asteroide';
      asteroid.userData.size = '0.3';
      asteroid.userData.hasRings = false;
      asteroid.userData.speed = speed.toFixed(2);
      asteroid.userData.description = 'Rocha espacial em movimento';
      asteroid.userData.parent = asteroid;
      
      scene.add(asteroid);
      asteroids.push(asteroid);
      interactiveObjects.push(asteroid);
    };

    // Criar alguns asteroides iniciais
    for (let i = 0; i < 5; i++) {
      createAsteroid();
    }

    // Animação
    const animate = () => {
      requestAnimationFrame(animate);

      // Animações desativadas em mobile
      if (!isMobile) {
        // Rotacionar estrelas lentamente
        stars.rotation.y += 0.00001;
        stars.rotation.x += 0.000005;

        // Animar buracos negros (rotação dos discos de acreção)
        blackHoles.forEach((blackHole) => {
          blackHole.children[1].rotation.z += 0.01; // Rotacionar disco interno
          blackHole.children[2].rotation.z -= 0.008; // Rotacionar disco externo (direção oposta)
        });
      }

      // Animar planetas (rotação lenta)
    //   planets.forEach((planet) => {
    //     planet.rotation.y += 0.0001;
    //     if (planet.children[1]) { // Se tem anéis
    //       planet.children[1].rotation.z += 0.00005;
    //     }
    //   });

      // Animar asteroides (desativado em mobile)
      if (!isMobile) {
        for (let i = asteroids.length - 1; i >= 0; i--) {
          const asteroid = asteroids[i];
          
          // Mover asteroide
          asteroid.position.x += asteroid.userData.velocity.x;
          asteroid.position.y += asteroid.userData.velocity.y;
          asteroid.position.z += asteroid.userData.velocity.z;
          
          // Rotação do asteroide
          asteroid.rotation.x += 0.05;
          asteroid.rotation.y += 0.03;
          
          asteroid.userData.lifetime++;
          
          // Remover asteroide se ele saiu da área ou atingiu o tempo máximo
          if (asteroid.userData.lifetime > asteroid.userData.maxLifetime ||
              Math.abs(asteroid.position.x) > 250 ||
              Math.abs(asteroid.position.y) > 250 ||
              Math.abs(asteroid.position.z) > 250) {
            scene.remove(asteroid);
            const index = interactiveObjects.indexOf(asteroid);
            if (index > -1) interactiveObjects.splice(index, 1);
            asteroids.splice(i, 1);
          }
        }
        
        // Criar novos asteroides aleatoriamente
        if (Math.random() > 0.97 && asteroids.length < 20) {
          createAsteroid();
        }
      }

      // Aplicar rotação da câmera baseada no mouse com zoom
      camera.position.x = Math.sin(cameraRotation.y) * zoomLevel;
      camera.position.z = Math.cos(cameraRotation.y) * zoomLevel;
      camera.position.y = Math.sin(cameraRotation.x) * (zoomLevel * 0.5);
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Event handlers para controle do mouse
    const handleMouseDown = (event) => {
      isDragging = true;
      previousMousePosition = {
        x: event.clientX,
        y: event.clientY
      };
      currentMount.style.cursor = 'grabbing';
    };

    const handleMouseMove = (event) => {
      // Atualizar posição do mouse para raycasting
      const rect = currentMount.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const deltaX = event.clientX - previousMousePosition.x;
        const deltaY = event.clientY - previousMousePosition.y;

        cameraRotation.y += deltaX * rotationSpeed;
        cameraRotation.x += deltaY * rotationSpeed;

        // Limitar rotação vertical para evitar inversão
        cameraRotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, cameraRotation.x));

        previousMousePosition = {
          x: event.clientX,
          y: event.clientY
        };
        
        // Esconder tooltip ao arrastar
        if (tooltipRef.current) {
          tooltipRef.current.style.display = 'none';
        }
      } else {
        // Detectar hover apenas quando não está arrastando
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(interactiveObjects, false);
        
        if (intersects.length > 0 && tooltipRef.current) {
          const object = intersects[0].object;
          const data = object.userData.parent?.userData;
          
          if (data) {
            let tooltipContent = `
              <div style="font-weight: bold; margin-bottom: 4px; color: #64ffda;">${data.type}</div>
              <div style="font-size: 0.85em; opacity: 0.9;">${data.description}</div>
              <div style="height: 1px; background: rgba(100, 255, 218, 0.2); margin: 6px 0;"></div>
              <div style="font-size: 0.85em;">Tamanho: ${data.size} un.</div>
            `;
            
            if (data.type !== 'Nebulosa' && data.type !== 'Asteroide') {
              tooltipContent += `<div style="font-size: 0.85em;">Anéis: ${data.hasRings ? 'Sim' : 'Não'}</div>`;
            }
            
            if (data.speed) {
              tooltipContent += `<div style="font-size: 0.85em;">Velocidade: ${data.speed} un/s</div>`;
            }
            
            if (data.color) {
              tooltipContent += `<div style="font-size: 0.85em;">Cor: <span style="display: inline-block; width: 12px; height: 12px; background: ${data.color}; border: 1px solid #fff; border-radius: 2px; vertical-align: middle; margin-left: 4px;"></span> ${data.colorName || ''}</div>`;
            }
            
            tooltipRef.current.innerHTML = tooltipContent;
            tooltipRef.current.style.display = 'block';
            tooltipRef.current.style.left = `${event.clientX + 15}px`;
            tooltipRef.current.style.top = `${event.clientY + 15}px`;
          }
        } else if (tooltipRef.current) {
          tooltipRef.current.style.display = 'none';
        }
      }
    };

    const handleMouseUp = () => {
      isDragging = false;
      currentMount.style.cursor = 'grab';
    };

    const handleWheel = (event) => {
      event.preventDefault();
      
      // Ajustar zoom baseado no scroll
      zoomLevel += event.deltaY * 0.05;
      zoomLevel = Math.max(minZoom, Math.min(maxZoom, zoomLevel));
    };

    // Redimensionar ao mudar o tamanho da janela
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    currentMount.addEventListener('mousedown', handleMouseDown);
    currentMount.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      currentMount.removeEventListener('mousedown', handleMouseDown);
      currentMount.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', handleResize);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      nebulaeGeometry.dispose();
      nebulaeMaterial.dispose();
      
      // Limpar buracos negros
      blackHoles.forEach(blackHole => {
        blackHole.children.forEach(child => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
      });
      
      // Limpar planetas
      planets.forEach(planet => {
        planet.children.forEach(child => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
      });
      
      // Limpar asteroides
      asteroids.forEach(asteroid => {
        scene.remove(asteroid);
      });
      asteroidGeometry.dispose();
      asteroidMaterial.dispose();
    };
  }, [isMobile]);

  return (
    <>
      <div
        ref={mountRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          background: 'radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%)',
          cursor: isMobile ? 'default' : 'grab',
          pointerEvents: isMobile ? 'none' : 'auto',
        }}
      />
      {!isMobile && (
        <div
          ref={tooltipRef}
          style={{
            position: 'fixed',
            display: 'none',
            background: 'rgba(10, 22, 40, 0.95)',
            backdropFilter: 'blur(10px)',
            color: '#fff',
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid rgba(100, 255, 218, 0.3)',
            fontSize: '0.9rem',
            pointerEvents: 'none',
            zIndex: 1000,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            maxWidth: '200px',
          }}
        />
      )}
    </>
  );
};

export default SpaceBackground;
