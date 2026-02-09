<!DOCTYPE html>
<html class="scroll-smooth" lang="pt-BR"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Brow Royale - Império da Estética</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&amp;family=Inter:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet"/>
<script>
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    colors: {
                        primary: "#D4AF37", // Gold
                        "primary-hover": "#B5952F",
                        "background-light": "#FAFAFA",
                        "background-dark": "#0A0A0A",
                        "surface-dark": "#111111",
                        "surface-light": "#FFFFFF",
                        "text-light-primary": "#1A1A1A",
                        "text-dark-primary": "#F5F5F5",
                        "text-light-secondary": "#4B5563",
                        "text-dark-secondary": "#A1A1AA",
                    },
                    fontFamily: {
                        display: ["'Playfair Display'", "serif"],
                        sans: ["'Inter'", "sans-serif"],
                    },
                    borderRadius: {
                        DEFAULT: "0.5rem",
                        'xl': '1rem',
                        '2xl': '1.5rem',
                    },
                    backgroundImage: {
                        'hero-pattern': "url('https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop')",
                        'gold-gradient': "linear-gradient(135deg, #D4AF37 0%, #F5D061 50%, #B5952F 100%)",
                    }
                },
            },
        };
    </script>
<style>
        .text-gold-gradient {
            background: linear-gradient(135deg, #D4AF37 0%, #F5D061 50%, #D4AF37 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .bg-gold-gradient {
            background: linear-gradient(135deg, #D4AF37 0%, #F5D061 50%, #B5952F 100%);
        }
    </style>
</head>
<body class="bg-background-light dark:bg-background-dark text-text-light-primary dark:text-text-dark-primary font-sans antialiased transition-colors duration-300">
<div class="fixed bottom-0 left-0 right-0 z-50 bg-surface-dark/95 backdrop-blur-md border-t border-primary/20 py-4 px-4 shadow-2xl transform translate-y-full transition-transform duration-500" id="sticky-cta">
<div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
<div class="flex items-center gap-4 hidden sm:flex">
<span class="text-white font-medium">LOTE ZERO <span class="text-primary font-bold">LIBERADO</span></span>
<div class="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
<div class="h-full bg-red-600 w-[85%] animate-pulse"></div>
</div>
<span class="text-xs text-gray-400">85% Vendido</span>
</div>
<a class="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 text-center text-sm uppercase tracking-wide" href="#pricing">
                Quero Comprar Meu Ingresso <span class="material-symbols-outlined align-middle text-sm ml-1">arrow_outward</span>
</a>
</div>
</div>
<header class="relative min-h-screen flex items-center justify-center overflow-hidden bg-background-dark">
<div class="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-20 dark:opacity-30"></div>
<div class="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
<div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-0">
<div class="grid lg:grid-cols-2 gap-12 items-center">
<div class="space-y-8 z-10 text-center lg:text-left">
<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-black/40 backdrop-blur-sm">
<span class="material-symbols-outlined text-primary text-sm">calendar_month</span>
<span class="text-gray-300 text-xs tracking-wide uppercase">10/02 às 19h | Ao vivo no Zoom</span>
</div>
<h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                        Dê adeus à micropigmentação:<br/>
<span class="text-gold-gradient italic">Brow Royale</span>
</h1>
<p class="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-light">
                        Descubra a técnica <strong class="text-white font-semibold">revolucionária</strong> que entrega sobrancelhas naturais e te permite faturar <strong class="text-primary">de R$3.000 a R$5.000</strong> por mês.
                    </p>
<p class="text-sm text-gray-400 max-w-xl mx-auto lg:mx-0">
                        Uma masterclass exclusiva onde você vai descobrir como se tornar a autoridade número 1 da sua região — antes que viralize.
                    </p>
<div class="flex flex-col sm:flex-row gap-4 items-center lg:justify-start justify-center pt-4">
<div class="text-left">
<span class="block text-sm text-gray-500 line-through">De: R$297,00</span>
<span class="block text-2xl font-bold text-white">Por: <span class="text-green-500">R$ 19,90</span></span>
</div>
</div>
<div class="pt-4">
<a class="group inline-flex items-center justify-center bg-gold-gradient hover:brightness-110 text-black font-bold py-4 px-8 rounded-full shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-1 text-sm sm:text-base w-full sm:w-auto uppercase tracking-wider" href="#pricing">
                            Sim! Eu Quero Ser Uma Brow Royale
                            <span class="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
</div>
<div class="relative hidden lg:block h-[800px] w-full">
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"></div>
<img alt="Mentora Brow Royale - Profissional de Estética" class="absolute bottom-0 right-0 h-full w-auto object-contain z-10 drop-shadow-2xl filter contrast-125 saturate-0" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhMT5h5qaUsIjvCsOA3b_Ro2Cd3c7Dodo3xONLd2909Lvo_6NLJ643QeCXz5Sg1YpBbk1ngQhBTMRylnJHTbHUMaHayA4C6NFcuNJguoJwI0873slFxLrw0bNrPilYCeeXF-yF7897PD_Fc72l_r-wTaQFGbCCoeRfdwYbAXgjEntfDyxo-xfhr325B_jvXb_NkmZNWZqlMw6b-QExrGwfRwnEZKt47RwYugzNtmdWWOYKrOTvlJqLDbwP-v5KSHLahY5yjOaIo1s"/>
<div class="absolute bottom-40 -right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full animate-bounce duration-[3000ms]">
<img alt="South Korea Flag" class="w-12 h-12 rounded-full object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwcbKVKbWRrYFxY2ZX_rUvhOKeBGxO5Ka40t2f4oBpB7EKVancwva-Djhg3Q_adn9qEpx1-asL1rI-hBmW3H0v3HOVIR7DFKfogxQgipoRhH7vlgdR1Ne4PJ34h0QamDfMjCbYR2YIf7WjKVnTBgbZ1qpJ0_32liZ9N-BycLb2tTY6WGBvwGqBQ2aH0HGUeS1jAso7GRyYgD0iu6OGsv2enosDFFoF9bP1v98fdJ3qBdUR3xoCmExfWC9OMID4MueNzxvOeArVaBw"/>
</div>
</div>
</div>
</div>
</header>
<section class="relative py-20 bg-background-light dark:bg-surface-dark">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid md:grid-cols-2 gap-8 items-stretch">
<div class="bg-surface-dark dark:bg-black p-10 rounded-2xl shadow-2xl border border-white/5 relative overflow-hidden group">
<div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
<h3 class="font-display text-3xl text-primary mb-8">PARA QUEM <span class="text-white italic">É O BROW ROYALE?</span></h3>
<ul class="space-y-4">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary mt-1">check_circle</span>
<span class="text-gray-300">Profissionais da estética que desejam elevar o nível do seu serviço.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary mt-1">check_circle</span>
<span class="text-gray-300">Iniciantes que querem começar com o pé direito e posicionamento premium.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary mt-1">check_circle</span>
<span class="text-gray-300">Quem está cansada da guerra de preços da micropigmentação tradicional.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary mt-1">check_circle</span>
<span class="text-gray-300">Quem quer faturar mais trabalhando menos horas por dia.</span>
</li>
</ul>
</div>
<div class="bg-white dark:bg-surface-dark p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5 relative overflow-hidden group">
<div class="absolute bottom-0 left-0 w-32 h-32 bg-gray-50 dark:bg-white/5 rounded-tr-full transition-transform group-hover:scale-110"></div>
<h3 class="font-display text-3xl text-gray-900 dark:text-white mb-2">POR QUE SUAS CLIENTES</h3>
<h4 class="font-display text-3xl text-primary mb-8 italic">VÃO AMAR &amp; PAGAR MAIS</h4>
<ul class="space-y-4">
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary mt-1">verified</span>
<span class="text-gray-600 dark:text-gray-300"><strong class="text-gray-900 dark:text-white">Técnica sem trauma:</strong> Conforto total para a cliente.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary mt-1">verified</span>
<span class="text-gray-600 dark:text-gray-300"><strong class="text-gray-900 dark:text-white">Aplicação rápida:</strong> Procedimentos que otimizam sua agenda.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary mt-1">verified</span>
<span class="text-gray-600 dark:text-gray-300"><strong class="text-gray-900 dark:text-white">Ticket Alto:</strong> Valor por sessão de pelo menos R$150.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary mt-1">verified</span>
<span class="text-gray-600 dark:text-gray-300"><strong class="text-gray-900 dark:text-white">Resultados Imediatos:</strong> O efeito "uau" que gera indicações.</span>
</li>
<li class="flex items-start gap-3">
<span class="material-symbols-outlined text-primary mt-1">verified</span>
<span class="text-gray-600 dark:text-gray-300"><strong class="text-gray-900 dark:text-white">Baixo Investimento:</strong> Não precisa de clínica equipada.</span>
</li>
</ul>
</div>
</div>
<div class="mt-12 text-center">
<a class="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white font-bold py-3 px-8 rounded shadow-lg transition-colors uppercase tracking-wider text-sm" href="#pricing">
                    Sim! Quero Ser Pioneira
                    <span class="material-symbols-outlined ml-2 text-sm">north_east</span>
</a>
</div>
</div>
</section>
<section class="py-24 bg-surface-dark relative overflow-hidden">
<div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div class="mb-16">
<span class="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2 block">O Mercado Precisa Disso</span>
<h2 class="font-display text-4xl md:text-5xl text-white mb-6">A Conta Fecha</h2>
<p class="text-gray-400 text-lg max-w-2xl mx-auto">Pare de vender horas baratas. Comece a vender transformação de alto valor com a técnica Brow Royale.</p>
</div>
<div class="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
<div class="p-4">
<div class="text-4xl font-display text-primary mb-2">5</div>
<div class="text-gray-300 text-sm uppercase tracking-wide">Clientes / Semana</div>
</div>
<div class="p-4">
<div class="text-4xl font-display text-primary mb-2">R$ 150</div>
<div class="text-gray-300 text-sm uppercase tracking-wide">Ticket Médio</div>
</div>
<div class="p-4">
<div class="text-4xl font-display text-primary mb-2">R$ 3.000</div>
<div class="text-gray-300 text-sm uppercase tracking-wide">Faturamento Extra</div>
</div>
</div>
<div class="mt-8 pt-8 border-t border-white/10">
<p class="text-white italic font-display text-xl">"Com apenas 1 cliente por dia útil, você já garante um faturamento de R$3.000,00 no mês."</p>
</div>
</div>
<div class="mt-12">
<a class="inline-block bg-white text-black hover:bg-gray-200 font-bold py-3 px-10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:scale-105 uppercase tracking-wide text-sm" href="#pricing">
                    Quero Aplicar o Brow Royale Antes de Todo Mundo
                    <span class="material-symbols-outlined align-middle ml-1 text-sm">arrow_forward</span>
</a>
</div>
</div>
</section>
<section class="py-24 bg-background-light dark:bg-background-dark" id="pricing">
<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 class="font-display text-4xl text-gray-900 dark:text-white mb-4">Garanta Seu Lugar</h2>
<div class="w-24 h-1 bg-primary mx-auto mb-10"></div>
<div class="bg-white dark:bg-surface-dark rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-white/10 relative transform hover:-translate-y-2 transition-transform duration-300">
<div class="absolute top-0 right-0">
<div class="bg-primary text-white text-xs font-bold px-10 py-2 transform rotate-45 translate-x-8 translate-y-4 shadow-md uppercase">
                        Lote 01
                    </div>
</div>
<div class="p-10">
<h3 class="font-display text-3xl font-bold text-gray-900 dark:text-white mb-2">Brow Royale <span class="text-primary italic font-normal">Experience</span></h3>
<p class="text-gray-500 dark:text-gray-400 text-sm mb-8">Acesso completo à Masterclass + Materiais de Apoio</p>
<div class="flex justify-center items-end gap-2 mb-8">
<span class="text-gray-400 line-through text-xl decoration-red-500">R$ 297,00</span>
<div class="text-5xl font-bold text-gray-900 dark:text-white tracking-tight">R$ 19,90</div>
</div>
<ul class="text-left space-y-4 mb-10 max-w-sm mx-auto">
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-sm">check</span>
<span class="text-gray-600 dark:text-gray-300 text-sm">Acesso ao vivo no Zoom</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-sm">check</span>
<span class="text-gray-600 dark:text-gray-300 text-sm">PDF com lista de materiais</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-sm">check</span>
<span class="text-gray-600 dark:text-gray-300 text-sm">Certificado de participação</span>
</li>
<li class="flex items-center gap-3">
<span class="material-symbols-outlined text-primary text-sm">check</span>
<span class="text-gray-600 dark:text-gray-300 text-sm">Grupo exclusivo de networking</span>
</li>
</ul>
<button class="w-full bg-gold-gradient hover:brightness-110 text-black font-bold py-4 rounded-xl shadow-lg transition-all transform active:scale-95 uppercase tracking-wide text-sm flex items-center justify-center gap-2">
                        Quero Me Inscrever Agora
                        <span class="material-symbols-outlined text-sm">lock</span>
</button>
<div class="mt-6 flex flex-col gap-2 items-center justify-center opacity-70">
<div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full">
<span class="material-symbols-outlined text-sm">verified_user</span> Compra Segura
                        </div>
<div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full">
<span class="material-symbols-outlined text-sm">hourglass_bottom</span> Vagas Limitadas
                        </div>
</div>
</div>
</div>
</div>
</section>
<section class="py-24 bg-surface-dark dark:bg-black relative">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div class="grid lg:grid-cols-2 gap-16 items-center">
<div class="order-2 lg:order-1 relative">
<div class="absolute inset-0 bg-primary/20 transform translate-x-4 translate-y-4 rounded-lg"></div>
<img alt="Mentora" class="relative rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ8kf2Yilny6TUvt-c7BcaH2aXCyAhW7s0CuunvMjBiTWZ_Nm2BGGPRJRct6mix0elNSpl0Eg2ceAakHrzejSytfK6lm4RjnHudT6gF2a66tiqUAbk1NKZ-xoZCb9WHbaE0PxNx4s8_Q7grs2O8ElCb-W18kSCk_-m1AtFLruM08bgi4oWnPRGzgir3JZj-ueT2hUxW3SHWptnJjfZMVfNwE_tRLO2ApOg4vw5ny7o8EvN009bZsf5Hsz4RuKafE2uYLFlamIDnKA"/>
</div>
<div class="order-1 lg:order-2">
<h2 class="font-display text-4xl sm:text-5xl text-white mb-8">Quem é a <span class="text-primary italic">Sua Mentora?</span></h2>
<div class="prose prose-invert prose-lg text-gray-400">
<p class="font-serif italic text-2xl text-white mb-6">
                            "Talvez pela aparência você pense que tudo foi fácil. Mas o berço de ouro passou longe."
                        </p>
<p>
                            Sou fundadora da <strong>Brow Royale Academy</strong> e comecei minha jornada trabalhando com 14 anos, panfletando em catracas de shopping por R$40 ao dia. Aos 20, me tornei mãe, larguei o emprego e vivi anos sendo submissa e desvalorizada — até decidir recomeçar.
                        </p>
<p>
                            De lá pra cá, já formei mais de <strong>8.000 alunas</strong>, ministrei cursos em 16 países e me tornei uma das maiores referências mundiais em embelezamento facial.
                        </p>
<p>
                            Hoje, minha missão é mostrar que você também pode transformar a sua história com uma técnica única, valorizada e lucrativa.
                        </p>
</div>
<div class="mt-10">
<a class="text-primary hover:text-white font-medium border-b border-primary hover:border-white pb-1 transition-colors inline-flex items-center gap-2" href="#pricing">
                            Ler bio completa <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section>
<section class="py-20 bg-background-light dark:bg-surface-dark">
<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 class="font-display text-3xl sm:text-4xl text-center text-gray-900 dark:text-white mb-12">Perguntas Frequentes</h2>
<div class="space-y-4" x-data="{ open: null }">
<details class="group bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
<span>Precisa ser biomédica?</span>
<span class="transition group-open:rotate-180">
<span class="material-symbols-outlined">expand_more</span>
</span>
</summary>
<div class="text-gray-600 dark:text-gray-400 p-6 pt-0 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-4">
                        Não! O método Brow Royale foi desenvolvido para que qualquer profissional da área da beleza, mesmo iniciantes, possam aplicar com segurança e excelência.
                    </div>
</details>
<details class="group bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
<span>É seguro o procedimento?</span>
<span class="transition group-open:rotate-180">
<span class="material-symbols-outlined">expand_more</span>
</span>
</summary>
<div class="text-gray-600 dark:text-gray-400 p-6 pt-0 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-4">
                        Sim, totalmente seguro. Trabalhamos com técnicas não invasivas que preservam a integridade da pele e dos fios da cliente.
                    </div>
</details>
<details class="group bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
<span>É definitivo?</span>
<span class="transition group-open:rotate-180">
<span class="material-symbols-outlined">expand_more</span>
</span>
</summary>
<div class="text-gray-600 dark:text-gray-400 p-6 pt-0 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-4">
                        Não. É um procedimento semi-permanente, o que é uma grande vantagem pois gera recorrência. A cliente volta a cada 30-45 dias para manutenção.
                    </div>
</details>
<details class="group bg-white dark:bg-black rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden">
<summary class="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
<span>Quanto posso cobrar?</span>
<span class="transition group-open:rotate-180">
<span class="material-symbols-outlined">expand_more</span>
</span>
</summary>
<div class="text-gray-600 dark:text-gray-400 p-6 pt-0 leading-relaxed border-t border-gray-100 dark:border-white/5 mt-4">
                        O valor mínimo sugerido é de R$150 por sessão, podendo chegar a R$350 dependendo da sua região e posicionamento.
                    </div>
</details>
</div>
<div class="mt-12 text-center">
<a class="inline-flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-black hover:opacity-90 font-bold py-3 px-8 rounded shadow transition-all uppercase tracking-wider text-xs" href="#pricing">
                    Liberar Minha Vaga por R$19,90 Agora
                    <span class="material-symbols-outlined ml-2 text-sm">north_east</span>
</a>
</div>
</div>
</section>
<footer class="bg-black text-gray-500 py-12 border-t border-white/10 mb-20">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div class="text-sm">
                © 2024 Brow Royale Academy. Todos os direitos reservados.
            </div>
<div class="flex items-center gap-6">
<a class="hover:text-primary transition-colors text-sm" href="#">Termos de Uso</a>
<a class="hover:text-primary transition-colors text-sm" href="#">Política de Privacidade</a>
</div>
<button aria-label="Voltar ao topo" class="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors group" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<span class="material-symbols-outlined text-white group-hover:-translate-y-1 transition-transform">keyboard_arrow_up</span>
</button>
</div>
</footer>
<script>
        // Simple script to handle the sticky CTA visibility
        const stickyCta = document.getElementById('sticky-cta');
        let lastScrollTop = 0;
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            // Show after scrolling past hero section (approx 600px)
            if (scrollTop > 600) {
                stickyCta.classList.remove('translate-y-full');
            } else {
                stickyCta.classList.add('translate-y-full');
            }
            lastScrollTop = scrollTop;
        });
    </script>

</body></html>