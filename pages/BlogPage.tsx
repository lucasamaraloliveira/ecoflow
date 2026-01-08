import React, { useState } from 'react';
import { ArrowLeft, Calendar, User, ArrowRight, Clock, X, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
    {
        title: 'Como a energia solar pode reduzir sua conta de luz em até 95%',
        excerpt: 'Descubra o potencial de economia que a instalação de painéis solares pode oferecer para sua residência ou empresa.',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop',
        author: 'Carlos Eduardo',
        date: '5 Jan 2026',
        readTime: '5 min',
        category: 'Economia',
        content: `
            <p className="mb-4">A energia solar fotovoltaica deixou de ser uma promessa de futuro para se tornar a realidade mais rentável do presente. Para muitos brasileiros, a conta de luz é um dos maiores pesos no orçamento mensal, mas isso pode mudar drasticamente.</p>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">O Mecanismo da Economia</h3>
            <p className="mb-4">Ao instalar um sistema solar, você passa a produzir sua própria eletricidade. Durante o dia, seus painéis geram energia que alimenta sua casa ou empresa. O excedente é injetado na rede da concessionária, gerando créditos que podem ser usados à noite ou em dias nublados.</p>
            <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 italic text-slate-500 mb-4 text-sm bg-slate-50 dark:bg-slate-800 rounded">
                "O Brasil possui um dos melhores índices de irradiação solar do mundo, o que torna o investimento ainda mais atrativo."
            </blockquote>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Redução de até 95%</h3>
            <p className="mb-4">O limite de redução de 95% existe porque, mesmo gerando toda a sua energia, você ainda precisa pagar as taxas de disponibilidade da rede e impostos mínimos. No entanto, o retorno sobre o investimento (ROI) é um dos mais altos do mercado, geralmente se pagando entre 3 a 5 anos.</p>
        `
    },
    {
        title: 'Guia completo de manutenção de painéis solares',
        excerpt: 'Aprenda as melhores práticas para manter seu sistema fotovoltaico funcionando com máxima eficiência.',
        image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=600&auto=format&fit=crop',
        author: 'Ana Paula',
        date: '2 Jan 2026',
        readTime: '8 min',
        category: 'Manutenção',
        content: `
            <p className="mb-4">Sistemas de energia solar são conhecidos pela sua baixíssima necessidade de manutenção, mas "baixa" não significa "zero". Para garantir que seu investimento dure décadas com eficiência máxima, alguns passos simples são essenciais.</p>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Limpeza é a Chave</h3>
            <p className="mb-4">O acúmulo de poeira, folhas ou sujeira de pássaros pode criar áreas de sombra nos painéis, reduzindo a produção. Uma limpeza simples com água e uma vassoura macia a cada 6 meses costuma ser suficiente.</p>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Monitoramento via App</h3>
            <p className="mb-4">Acompanhe diariamente a geração através do aplicativo. Se notar uma queda brusca sem motivo aparente (como chuva), pode ser hora de chamar nossa assistência técnica para uma verificação nos inversores.</p>
        `
    },
    {
        title: 'Financiamento solar: opções para 2026',
        excerpt: 'Conheça as melhores linhas de crédito e financiamento para instalar energia solar sem comprometer seu orçamento.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop',
        author: 'Fernando Rocha',
        date: '28 Dez 2025',
        readTime: '6 min',
        category: 'Finanças',
        content: `
            <p className="mb-4">Em 2026, as opções de financiamento para energia solar nunca estiveram tão favoráveis. Bancos públicos e privados criaram linhas específicas com carência e juros reduzidos para projetos sustentáveis.</p>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Troque sua conta por uma parcela</h3>
            <p className="mb-4">A estratégia de ouro é financiar o sistema de modo que o valor da parcela seja próximo ou inferior à sua antiga conta de luz. Assim, o sistema "se paga sozinho" desde o primeiro mês.</p>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Incentivos Fiscais</h3>
            <p className="mb-4">Muitas prefeituras já oferecem o "IPTU Verde", dando descontos diretos no imposto para imóveis que possuem sistemas fotovoltaicos instalados.</p>
        `
    },
    {
        title: 'Tendências em energia renovável para os próximos anos',
        excerpt: 'As principais inovações tecnológicas que prometem revolucionar o setor de energia limpa no Brasil.',
        image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=600&auto=format&fit=crop',
        author: 'Roberto Almeida',
        date: '20 Dez 2025',
        readTime: '7 min',
        category: 'Tecnologia',
        content: `
            <p className="mb-4">O setor de energia renovável está em constante evolução. Inovações em armazenamento e inteligência artificial estão mudando a forma como gerenciamos o consumo.</p>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Baterias de Próxima Geração</h3>
            <p className="mb-4">O custo das baterias de lítio continua caindo, tornando os sistemas híbridos (on-grid + armazenamento) cada vez mais acessíveis para o consumidor residencial comum.</p>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Inteligência Artificial</h3>
            <p className="mb-4">Sistemas inteligentes agora conseguem prever a produção solar com base na meteorologia e ajustar automaticamente o consumo de eletrodomésticos para maximizar a economia.</p>
        `
    },
    {
        title: 'Energia solar rural: benefícios para o agronegócio',
        excerpt: 'Como propriedades rurais podem se beneficiar da energia fotovoltaica para reduzir custos operacionais.',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop',
        author: 'Juliana Costa',
        date: '15 Dez 2025',
        readTime: '5 min',
        category: 'Agronegócio',
        content: `
            <p className="mb-4">No campo, a energia elétrica muitas vezes é cara e instável. A energia solar surge como a solução definitiva para o produtor rural que busca eficiência e lucro.</p>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Irrigação Sustentável</h3>
            <p className="mb-4">Sistemas de irrigação consomem muita energia. Ao utilizar o sol como fonte, o produtor elimina um dos maiores custos fixos da safra.</p>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Independência Energética</h3>
            <p className="mb-4">Para locais remotos onde a rede da concessionária é precária, sistemas isolados (off-grid) garantem que a produção não pare nunca.</p>
        `
    },
    {
        title: 'Impacto ambiental: quanto CO2 você deixa de emitir',
        excerpt: 'Entenda a contribuição positiva que a energia solar traz para o meio ambiente e a redução da pegada de carbono.',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop',
        author: 'Mariana Torres',
        date: '10 Dez 2025',
        readTime: '4 min',
        category: 'Sustentabilidade',
        content: `
            <p className="mb-4">Além da economia financeira, o benefício ambiental da energia solar é incalculável. Ao optar por uma fonte limpa, você se torna parte ativa na luta contra o aquecimento global.</p>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Energia Verde de Verdade</h3>
            <p className="mb-4">Diferente das hidrelétricas, que causam grandes impactos no ecossistema local, a energia solar é gerada no local de consumo, sem barulho, sem poluição e sem emissão de gases de efeito estufa.</p>
            <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">Um Legado para o Futuro</h3>
            <p className="mb-4">Instalar painéis solares é uma declaração de valores. Você está investindo em um mundo melhor para as próximas gerações enquanto valoriza seu patrimônio.</p>
        `
    },
];

const BlogPage: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
            {/* Header */}
            <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Voltar ao início</span>
                    </Link>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-4">Blog</h1>
                    <p className="text-xl text-purple-100 max-w-2xl">
                        Dicas, novidades e informações sobre energia solar e sustentabilidade.
                    </p>
                </div>
            </div>

            {/* Blog Posts */}
            <div className="container mx-auto px-6 py-20">
                {/* Featured Post */}
                <div className="mb-16">
                    <div
                        onClick={() => setSelectedPost(posts[0])}
                        className="group relative overflow-hidden rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all cursor-pointer"
                    >
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="relative overflow-hidden">
                                <img
                                    src={posts[0].image}
                                    alt={posts[0].title}
                                    className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-4 left-4 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Destaque
                                </span>
                            </div>
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <span className="text-yellow-500 font-bold uppercase tracking-widest text-xs mb-3">{posts[0].category}</span>
                                <h2 className="text-2xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-yellow-500 transition-colors leading-tight">
                                    {posts[0].title}
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg leading-relaxed">{posts[0].excerpt}</p>
                                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-8 border-y border-slate-50 dark:border-slate-800 py-4">
                                    <span className="flex items-center gap-2 font-medium"><User className="w-4 h-4 text-purple-500" /> {posts[0].author}</span>
                                    <span className="flex items-center gap-2 font-medium"><Calendar className="w-4 h-4 text-purple-500" /> {posts[0].date}</span>
                                    <span className="flex items-center gap-2 font-medium"><Clock className="w-4 h-4 text-purple-500" /> {posts[0].readTime}</span>
                                </div>
                                <button className="inline-flex items-center gap-2 text-yellow-500 font-black uppercase tracking-widest text-sm hover:gap-4 transition-all">
                                    Ler artigo completo <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.slice(1).map((post, idx) => (
                        <article
                            key={idx}
                            onClick={() => setSelectedPost(post)}
                            className="group bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all cursor-pointer flex flex-col"
                        >
                            <div className="relative overflow-hidden h-56">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <span className="absolute top-4 left-4 bg-white/95 dark:bg-slate-800/95 text-slate-900 dark:text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-sm border border-white/20">
                                    {post.category}
                                </span>
                            </div>
                            <div className="p-8 flex flex-col flex-1">
                                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4 group-hover:text-yellow-500 transition-colors line-clamp-2 leading-relaxed">
                                    {post.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                                <div className="mt-auto flex items-center justify-between border-t border-slate-50 dark:border-slate-800 pt-6">
                                    <span className="flex items-center gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                                        <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                            <User className="w-4 h-4" />
                                        </div>
                                        {post.author}
                                    </span>
                                    <span className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-yellow-400 group-hover:text-slate-900 transition-all">
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Article Modal */}
                {selectedPost && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300">
                        <div
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                            onClick={() => setSelectedPost(null)}
                        ></div>
                        <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
                            {/* Modal Header */}
                            <div className="relative h-64 lg:h-80 flex-shrink-0">
                                <img
                                    src={selectedPost.image}
                                    alt={selectedPost.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-md transition-all active:scale-95"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <span className="bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3 inline-block">
                                        {selectedPost.category}
                                    </span>
                                    <h2 className="text-2xl lg:text-4xl font-black text-white leading-tight line-clamp-2">
                                        {selectedPost.title}
                                    </h2>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="flex-1 overflow-y-auto p-8 lg:p-12 custom-scrollbar mr-2 mb-4 rounded-[2rem]">
                                <div className="flex flex-wrap items-center gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest mb-10 pb-6 border-b border-slate-100 dark:border-slate-800">
                                    <span className="flex items-center gap-2"><User className="w-4 h-4 text-purple-500" /> Por {selectedPost.author}</span>
                                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-purple-500" /> {selectedPost.date}</span>
                                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-purple-500" /> Leitura: {selectedPost.readTime}</span>
                                </div>

                                <div
                                    className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: selectedPost.content || '' }}
                                />

                                <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Compartilhar:</span>
                                        <div className="flex gap-2">
                                            <button className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-purple-100 hover:text-purple-600 transition-colors">
                                                <Facebook className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-purple-100 hover:text-purple-600 transition-colors">
                                                <Twitter className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-purple-100 hover:text-purple-600 transition-colors">
                                                <Linkedin className="w-4 h-4" />
                                            </button>
                                            <button className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-purple-100 hover:text-purple-600 transition-colors">
                                                <Share2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setSelectedPost(null)}
                                        className="bg-slate-900 dark:bg-slate-800 text-white dark:text-yellow-400 px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-yellow-400 hover:text-slate-900 transition-all"
                                    >
                                        Fechar Artigo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Newsletter */}
                <div className="mt-20 bg-slate-900 dark:bg-slate-800 rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 blur-3xl -z-0"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">
                            Receba novidades no seu e-mail
                        </h2>
                        <p className="text-slate-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                            Inscreva-se na nossa newsletter e receba dicas de economia, novidades do setor e ofertas exclusivas.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder="seu@email.com"
                                className="flex-1 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 font-medium"
                            />
                            <button className="bg-yellow-400 text-slate-900 px-10 py-5 rounded-2xl font-black hover:bg-yellow-500 transition-all whitespace-nowrap shadow-xl shadow-yellow-400/20 active:scale-95">
                                Inscrever-se
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
