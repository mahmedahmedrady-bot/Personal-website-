
        // تبديل الوضع الليلي/النهاري
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            if (body.classList.contains('dark-mode')) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                localStorage.setItem('theme', 'dark');
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', 'light');
            }
        });

        // تبديل اللغة
        const langToggle = document.getElementById('langToggle');
        
        langToggle.addEventListener('click', () => {
            body.classList.toggle('english');
            
            if (body.classList.contains('english')) {
                localStorage.setItem('language', 'english');
            } else {
                localStorage.setItem('language', 'arabic');
            }
        });

        // تحميل الوضع المحفوظ
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }

        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage === 'english') {
            body.classList.add('english');
        }

        // تأثير الشريط العلوي عند التمرير
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // تأثيرات الظهور عند التمرير
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.skill-card, .website-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // دالة لتحديث الـ SEO حسب اللغة
function updateSEOContent(lang) {
    const seoData = {
        en: {
            title: "Zeno Web | Full Stack Web Developer",
            description: "Zeno Web - Professional Full Stack Web Developer specializing in modern web applications, responsive websites, and creative digital solutions",
            keywords: "web developer, full stack developer, web development, programming, frontend, backend, JavaScript, React, Node.js",
            ogTitle: "Zeno Web | Full Stack Web Developer",
            ogDescription: "Professional Full Stack Web Developer specializing in modern web applications and creative solutions"
        },
        ar: {
            title: "زينو ويب | مطور مواقع ويب متكامل",
            description: "زينو ويب - مطور ويب محترف متخصص في تطبيقات الويب الحديثة، المواقع المتجاوبة، والحلول الرقمية الإبداعية",
            keywords: "مطور ويب, مبرمج, تطوير مواقع, برمجة, واجهات, زينو, جافاسكريبت, رياكت",
            ogTitle: "زينو ويب | مطور مواقع ويب متكامل",
            ogDescription: "مطور ويب محترف متخصص في تطبيقات الويب الحديثة والحلول الرقمية الإبداعية"
        }
    };
    
    const data = seoData[lang];
    
    // تحديث الـ title و meta tags
    document.title = data.title;
    document.querySelector('meta[name="description"]').setAttribute('content', data.description);
    document.querySelector('meta[name="keywords"]').setAttribute('content', data.keywords);
    document.querySelector('meta[property="og:title"]').setAttribute('content', data.ogTitle);
    document.querySelector('meta[property="og:description"]').setAttribute('content', data.ogDescription);
    
    // تحديث لغة الـ HTML
    document.documentElement.lang = lang;
    
    // تحديث Open Graph locale
    if (lang === 'ar') {
        document.querySelector('meta[property="og:locale"]').setAttribute('content', 'ar_SA');
    } else {
        document.querySelector('meta[property="og:locale"]').setAttribute('content', 'en_US');
    }
}

// استخدم الدالة عندما المستخدم يغير اللغة
// updateSEOContent('ar'); // للعربية
// updateSEOContent('en'); // للإنجليزية
