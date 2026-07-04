        // --- Component Loader ---
        async function loadComponents() {
            try {
                const navRes = await fetch('./components/navbar.html');
                if(navRes.ok) document.getElementById('navbar-container').innerHTML = await navRes.text();
                
                const footerRes = await fetch('./components/footer.html');
                if(footerRes.ok) document.getElementById('footer-container').innerHTML = await footerRes.text();
                
                // Initialize theme toggle AFTER navbar is loaded
                initThemeToggle();
            } catch (error) {
                console.error('Error loading components. Make sure to run this via a local server (e.g. Live Server).', error);
            }
        }

        // --- Theme Toggle Logic ---
        function initThemeToggle() {
            const themeToggleBtn = document.getElementById('theme-toggle');
            const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
            const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
            
            const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
            const themeToggleDarkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
            const themeToggleLightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');

            if (!themeToggleBtn) return; // fail-safe

            function setIcon(theme) {
                if (theme === 'dark') {
                    themeToggleLightIcon.classList.add('hidden');
                    themeToggleDarkIcon.classList.remove('hidden');
                    themeToggleLightIconMobile.classList.add('hidden');
                    themeToggleDarkIconMobile.classList.remove('hidden');
                } else {
                    themeToggleDarkIcon.classList.add('hidden');
                    themeToggleLightIcon.classList.remove('hidden');
                    themeToggleDarkIconMobile.classList.add('hidden');
                    themeToggleLightIconMobile.classList.remove('hidden');
                }
            }

            let currentTheme = localStorage.getItem('color-theme');
            if (currentTheme === 'dark' || (!currentTheme && document.documentElement.classList.contains('dark'))) {
                setIcon('dark');
            } else {
                setIcon('light');
            }

            function toggleTheme() {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('color-theme', 'light');
                    setIcon('light');
                } else {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('color-theme', 'dark');
                    setIcon('dark');
                }
            }

            themeToggleBtn.addEventListener('click', toggleTheme);
            themeToggleBtnMobile.addEventListener('click', toggleTheme);
        }

        // Run component loader
        document.addEventListener('DOMContentLoaded', loadComponents);

        // --- Terminal Animation Script ---
        const terminalContent = document.getElementById('terminal-content');
        const commands = [
            { text: "> SantriCode.Labs --init", delay: 1000 },
            { text: "✔ Web Development ... ready", delay: 500 },
            { text: "✔ App Development ... ready", delay: 500 },
            { text: "✔ IT Task Assistant ... ready", delay: 500 },
            { text: "> Siap membantu proyekmu.", delay: 800, keepCursor: true }
        ];

        async function typeCommand(command) {
            return new Promise(resolve => {
                const line = document.createElement('div');
                line.className = 'mb-1';
                
                // Jika itu output ✔
                if (command.text.startsWith('✔')) {
                    line.innerHTML = `<span class="text-green-500 mr-2">✔</span><span class="text-text-main">${command.text.substring(2)}</span>`;
                    terminalContent.appendChild(line);
                    setTimeout(resolve, command.delay);
                    return;
                }

                terminalContent.appendChild(line);
                
                let i = 0;
                let textToType = command.text;
                
                // Jika prompt, beri warna beda pada >
                let prefix = '';
                if(textToType.startsWith('> ')) {
                    prefix = '<span class="text-soft-cyan">></span> ';
                    textToType = textToType.substring(2);
                }

                function typeChar() {
                    if (i < textToType.length) {
                        line.innerHTML = prefix + textToType.substring(0, i + 1) + '<span class="terminal-cursor"></span>';
                        i++;
                        // Random typing speed
                        setTimeout(typeChar, Math.random() * 30 + 30);
                    } else {
                        if (!command.keepCursor) {
                            line.innerHTML = prefix + textToType;
                        }
                        setTimeout(resolve, command.delay);
                    }
                }
                
                typeChar();
            });
        }

        async function runTerminalSequence() {
            for (const cmd of commands) {
                await typeCommand(cmd);
            }
        }

        // Start animation after a short delay
        setTimeout(runTerminalSequence, 500);

        // --- ScrollReveal Animations ---
        document.addEventListener('DOMContentLoaded', () => {
            const sr = ScrollReveal({
                distance: '40px',
                duration: 1000,
                easing: 'cubic-bezier(0.5, 0, 0, 1)',
                origin: 'bottom',
                interval: 100
            });

            // Hero section
            sr.reveal('.order-1 h1', { origin: 'left', distance: '50px', delay: 200 });
            sr.reveal('.order-1 p', { origin: 'left', distance: '50px', delay: 400 });
            sr.reveal('.order-1 .flex', { origin: 'bottom', distance: '30px', delay: 600 });
            sr.reveal('.order-2.bg-bg-surface', { origin: 'right', distance: '50px', delay: 300 });

            // Section Headers
            sr.reveal('section h2', { origin: 'bottom', distance: '30px' });
            sr.reveal('section span.font-mono', { origin: 'bottom', distance: '20px' });

            // Cards & Grid Items
            sr.reveal('#layanan .grid > div', { interval: 150 });
            sr.reveal('#cara-kerja .grid > div', { interval: 150 });
            sr.reveal('.grid.md\\:grid-cols-3 > div', { interval: 150 }); // Testimonials

            // CTA Section
            sr.reveal('#kontak h2', { origin: 'bottom', distance: '30px' });
            sr.reveal('#kontak p', { origin: 'bottom', distance: '30px', delay: 150 });
            sr.reveal('#kontak a', { origin: 'bottom', scale: 0.9, delay: 300 });
        });
