        // --- Component Loader ---
        async function loadComponents() {
            try {
                const navRes = await fetch('./components/navbar.html');
                if(navRes.ok) document.getElementById('navbar-container').innerHTML = await navRes.text();
                
                const footerRes = await fetch('./components/footer.html');
                if(footerRes.ok) document.getElementById('footer-container').innerHTML = await footerRes.text();
                
                // Initialize theme toggle AFTER navbar is loaded
                initThemeToggle();
                initMobileMenu();
            } catch (error) {
                console.error('Error loading components. Make sure to run this via a local server (e.g. Live Server).', error);
            }
        }

        // --- Mobile Menu Logic ---
        function initMobileMenu() {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (!mobileMenuBtn || !mobileMenu) return;

            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });

            // Close menu when a link is clicked
            const mobileLinks = document.querySelectorAll('.mobile-menu-link');
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        }

        // --- Theme Toggle Logic ---
        function initThemeToggle() {
            // Desktop buttons
            const sunBtn = document.getElementById('theme-toggle-light');
            const moonBtn = document.getElementById('theme-toggle-dark');
            // Mobile buttons
            const sunBtnMobile = document.getElementById('theme-toggle-light-mobile');
            const moonBtnMobile = document.getElementById('theme-toggle-dark-mobile');

            if (!sunBtn) return; // fail-safe

            function showSun() {
                sunBtn.classList.remove('hidden');
                moonBtn.classList.add('hidden');
                sunBtnMobile.classList.remove('hidden');
                moonBtnMobile.classList.add('hidden');
            }

            function showMoon() {
                sunBtn.classList.add('hidden');
                moonBtn.classList.remove('hidden');
                sunBtnMobile.classList.add('hidden');
                moonBtnMobile.classList.remove('hidden');
            }

            // Set initial icon based on current theme
            let currentTheme = localStorage.getItem('color-theme');
            if (currentTheme === 'dark' || (!currentTheme && document.documentElement.classList.contains('dark'))) {
                showMoon();
            } else {
                showSun();
            }

            function switchToDark() {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
                showMoon();
            }

            function switchToLight() {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
                showSun();
            }

            // Sun click → switch to dark mode
            sunBtn.addEventListener('click', switchToDark);
            sunBtnMobile.addEventListener('click', switchToDark);

            // Moon click → switch to light mode
            moonBtn.addEventListener('click', switchToLight);
            moonBtnMobile.addEventListener('click', switchToLight);
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
            sr.reveal('#kontak button', { origin: 'bottom', scale: 0.9, delay: 300 });
        });

        // --- WhatsApp Modal Logic ---
        function openWaModal(e) {
            if(e) e.preventDefault();
            const modal = document.getElementById('wa-modal');
            const backdrop = document.getElementById('wa-modal-backdrop');
            const content = document.getElementById('wa-modal-content');
            
            modal.classList.remove('hidden');
            
            // Trigger reflow for transition
            void modal.offsetWidth;
            
            backdrop.classList.remove('opacity-0');
            backdrop.classList.add('opacity-100');
            
            content.classList.remove('opacity-0', 'scale-95');
            content.classList.add('opacity-100', 'scale-100');
        }

        function closeWaModal() {
            const modal = document.getElementById('wa-modal');
            const backdrop = document.getElementById('wa-modal-backdrop');
            const content = document.getElementById('wa-modal-content');
            
            backdrop.classList.remove('opacity-100');
            backdrop.classList.add('opacity-0');
            
            content.classList.remove('opacity-100', 'scale-100');
            content.classList.add('opacity-0', 'scale-95');
            
            // Wait for transition to finish before hiding
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function submitWaForm(e) {
            e.preventDefault();
            
            const service = document.getElementById('wa-service').value;
            const budget = document.getElementById('wa-budget').value;
            const notes = document.getElementById('wa-notes').value.trim();
            
            // Format WhatsApp Message
            let message = `Halo SantriCode, saya tertarik untuk diskusi terkait project digital.\n\n`;
            message += `*Layanan:* ${service}\n`;
            message += `*Estimasi Budget:* ${budget}\n`;
            
            if(notes) {
                message += `*Deskripsi/Catatan:* ${notes}\n`;
            }
            
            message += `\nMohon info lebih lanjut. Terima kasih!`;
            
            const waNumber = '6283826314405';
            const encodedMessage = encodeURIComponent(message);
            const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;
            
            window.open(waUrl, '_blank');
            closeWaModal();
        }
