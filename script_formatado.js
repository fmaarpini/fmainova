particlesJS("hero", {
  "particles": {
    "number": {
      "value": 20, // poucos pontos
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#25d366" // cor dos pontos
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.9
    },
    "size": {
      "value": 4,
      "random": true
    },
    "line_linked": {
      "enable": false // 🚫 DESLIGADO para não mostrar linhas fixas
    },
    "move": {
      "enable": true,
      "speed": 0.5, // bem lento
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" // linhas só aparecem ao passar o mouse
      },
      "onclick": {
        "enable": false // não adiciona mais partículas ao clicar
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150, // distância de interação
        "line_linked": {
          "opacity": 0.9, // intensidade da linha no hover
          "color": "#ffffff", // cor da linha ao passar o mouse
          "width": 1.5 // espessura normal
        }
      }
    }
  },
  "retina_detect": true
});
