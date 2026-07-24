//=========================================
// JIO LOTTERY V2 SCRIPT
//=========================================

// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
  
  navbar.classList.toggle("active");
  
});


// CLOSE MENU

document.querySelectorAll(".navbar a").forEach(link => {
  
  link.addEventListener("click", () => {
    
    navbar.classList.remove("active");
    
  });
  
});


// STICKY HEADER

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 80) {
    
    header.style.boxShadow = "0 12px 35px rgba(0,0,0,.15)";
    
  } else {
    
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";
    
  }
  
});


// SCROLL TOP

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  
  if (window.scrollY > 300) {
    
    topBtn.style.display = "flex";
    
  } else {
    
    topBtn.style.display = "none";
    
  }
  
});

topBtn.onclick = () => {
  
  window.scrollTo({
    
    top: 0,
    
    behavior: "smooth"
    
  });
  
};


// ACTIVE MENU

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  
  let current = "";
  
  sections.forEach(sec => {
    
    const top = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    
    if (pageYOffset >= top) {
      
      current = sec.getAttribute("id");
      
    }
    
  });
  
  navLinks.forEach(link => {
    
    link.classList.remove("active");
    
    if (link.getAttribute("href") === "#" + current) {
      
      link.classList.add("active");
      
    }
    
  });
  
});


// FADE EFFECT

const reveal = document.querySelectorAll(
  
  ".service-card,.why-box,.counter-box,.faq-box,.contact-card,.about-image,.about-content"
  
);

const observer = new IntersectionObserver(entries => {
  
  entries.forEach(entry => {
    
    if (entry.isIntersecting) {
      
      entry.target.style.opacity = "1";
      
      entry.target.style.transform = "translateY(0)";
      
    }
    
  });
  
});

reveal.forEach(item => {
  
  item.style.opacity = "0";
  
  item.style.transform = "translateY(60px)";
  
  item.style.transition = ".8s";
  
  observer.observe(item);
  
});


// COUNTER

const counters = document.querySelectorAll(".counter-box h2");

const speed = 100;

counters.forEach(counter => {
  
  const update = () => {
    
    const target = counter.innerText.replace(/\D/g, '');
    
    const count = +counter.getAttribute("data-count") || 0;
    
    const inc = Math.ceil(target / speed);
    
    if (count < target) {
      
      counter.setAttribute("data-count", count + inc);
      
      counter.innerText = (count + inc) + "+";
      
      setTimeout(update, 20);
      
    } else {
      
      counter.innerText = target + "+";
      
    }
    
  }
  
  update();
  
});


// NOTICE PAUSE

const notice = document.querySelector(".notice-scroll");

if (notice) {
  
  notice.addEventListener("mouseenter", () => {
    
    notice.style.animationPlayState = "paused";
    
  });
  
  notice.addEventListener("mouseleave", () => {
    
    notice.style.animationPlayState = "running";
    
  });
  
}


// HERO IMAGE

const hero = document.querySelector(".hero-right img");

window.addEventListener("mousemove", (e) => {
  
  if (hero) {
    
    let x = (window.innerWidth / 2 - e.pageX) / 60;
    
    let y = (window.innerHeight / 2 - e.pageY) / 60;
    
    hero.style.transform = `translate(${x}px,${y}px)`;
    
  }
  
});


// LOADER

window.addEventListener("load", () => {
  
  document.body.classList.add("loaded");
  
});


// SMOOTH LINKS

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  
  anchor.addEventListener("click", function(e) {
    
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute("href"));
    
    if (target) {
      
      target.scrollIntoView({
        
        behavior: "smooth"
        
      });
      
    }
    
  });
  
});


// FOOTER YEAR

const year = document.getElementById("year");

if (year) {
  
  year.innerHTML = new Date().getFullYear();
  
}
