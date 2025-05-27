// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Business Automation",
    excerpt: "Discover how AI is transforming business processes and increasing efficiency across industries.",
    image: "https://images.unsplash.com/photo-1677442135136-760c81374e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "May 27, 2024",
    readTime: "5 min read",
    category: "AI"
  },
  {
    id: 2,
    title: "Web Development Trends to Watch in 2024",
    excerpt: "Stay ahead of the curve with these emerging web development technologies and frameworks.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
    date: "May 20, 2024",
    readTime: "4 min read",
    category: "Web Development"
  },
  {
    id: 3,
    title: "Optimizing Payment Processing for Global Markets",
    excerpt: "Learn how to streamline your payment processing for international customers and reduce fees.",
    image: "https://images.unsplash.com/photo-1604591257955-9e3c92f14b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "May 15, 2024",
    readTime: "6 min read",
    category: "Payments"
  },
  {
    id: 4,
    title: "Building Scalable Cloud Infrastructure",
    excerpt: "Best practices for designing and implementing cloud solutions that grow with your business needs.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    date: "May 10, 2024",
    readTime: "7 min read",
    category: "Cloud Computing"
  }
];

// DOM Elements
const blogGrid = document.getElementById('blogGrid');

// Generate blog posts
function generateBlogPosts() {
  blogGrid.innerHTML = blogPosts.map(post => `
    <div class="blog-card" data-id="${post.id}">
      <img src="${post.image}" alt="${post.title}" class="blog-image">
      <div class="blog-content">
        <span class="category">${post.category}</span>
        <h3>${post.title}</h3>
        <p>${post.excerpt}</p>
        <div class="blog-meta">
          <span>${post.date}</span>
          <span>${post.readTime}</span>
        </div>
        <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
      </div>
    </div>
  `).join('');

  // Add event listeners to blog cards
  document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't navigate if the click was on a link inside the card
      if (e.target.tagName === 'A' || e.target.closest('a')) {
        return;
      }
      const postId = card.getAttribute('data-id');
      viewBlogPost(postId);
    });
  });
}

// View blog post (placeholder function)
function viewBlogPost(postId) {
  // In a real implementation, this would navigate to a blog post page
  // or show a modal with the full post content
  console.log(`Viewing blog post ${postId}`);
  // For now, just show an alert
  const post = blogPosts.find(p => p.id === parseInt(postId));
  if (post) {
    alert(`You clicked on: ${post.title}\n\nThis would typically take you to the full blog post.`);
  }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Calculate the position to scroll to, accounting for the fixed header
      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  generateBlogPosts();
  
  // Add active class to nav links on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - 300)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Add animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .pricing-card, .blog-card');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial state for animation
  document.querySelectorAll('.service-card, .pricing-card, .blog-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
  });

  // Run once on load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
});

// Handle fee calculator dropdown
const feeCalculators = document.querySelectorAll('.dropdown-content a');
feeCalculators.forEach(calculator => {
  calculator.addEventListener('click', (e) => {
    e.preventDefault();
    const calculatorType = calculator.textContent.trim();
    alert(`Redirecting to ${calculatorType} Fee Calculator\n\nIn a real implementation, this would take you to the specific calculator page.`);
  });
});