import React from 'react';
import { ArrowLeft, Calendar, User, ArrowRight, Clock } from 'lucide-react';
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
    },
    {
        title: 'Guia completo de manutenção de painéis solares',
        excerpt: 'Aprenda as melhores práticas para manter seu sistema fotovoltaico funcionando com máxima eficiência.',
        image: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=600&auto=format&fit=crop',
        author: 'Ana Paula',
        date: '2 Jan 2026',
        readTime: '8 min',
        category: 'Manutenção',
    },
    {
        title: 'Financiamento solar: opções para 2026',
        excerpt: 'Conheça as melhores linhas de crédito e financiamento para instalar energia solar sem comprometer seu orçamento.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop',
        author: 'Fernando Rocha',
        date: '28 Dez 2025',
        readTime: '6 min',
        category: 'Finanças',
    },
    {
        title: 'Tendências em energia renovável para os próximos anos',
        excerpt: 'As principais inovações tecnológicas que prometem revolucionar o setor de energia limpa no Brasil.',
        image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=600&auto=format&fit=crop',
        author: 'Roberto Almeida',
        date: '20 Dez 2025',
        readTime: '7 min',
        category: 'Tecnologia',
    },
    {
        title: 'Energia solar rural: benefícios para o agronegócio',
        excerpt: 'Como propriedades rurais podem se beneficiar da energia fotovoltaica para reduzir custos operacionais.',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=600&auto=format&fit=crop',
        author: 'Juliana Costa',
        date: '15 Dez 2025',
        readTime: '5 min',
        category: 'Agronegócio',
    },
    {
        title: 'Impacto ambiental: quanto CO2 você deixa de emitir',
        excerpt: 'Entenda a contribuição positiva que a energia solar traz para o meio ambiente e a redução da pegada de carbono.',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop',
        author: 'Mariana Torres',
        date: '10 Dez 2025',
        readTime: '4 min',
        category: 'Sustentabilidade',
    },
];

const BlogPage: React.FC = () => {
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
                    <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all">
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="relative overflow-hidden">
                                <img
                                    src={posts[0].image}
                                    alt={posts[0].title}
                                    className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-4 left-4 bg-yellow-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                                    Destaque
                                </span>
                            </div>
                            <div className="p-8 lg:p-12 flex flex-col justify-center">
                                <span className="text-yellow-500 font-semibold mb-2">{posts[0].category}</span>
                                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-yellow-500 transition-colors">
                                    {posts[0].title}
                                </h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-6">{posts[0].excerpt}</p>
                                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
                                    <span className="flex items-center gap-1"><User className="w-4 h-4" /> {posts[0].author}</span>
                                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {posts[0].date}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {posts[0].readTime}</span>
                                </div>
                                <button className="inline-flex items-center gap-2 text-yellow-500 font-bold hover:gap-4 transition-all">
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
                            className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <span className="absolute top-4 left-4 bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white px-3 py-1 rounded-full text-xs font-bold">
                                    {post.category}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-yellow-500 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="mt-20 bg-slate-900 dark:bg-slate-800 rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Receba novidades no seu e-mail
                    </h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        Inscreva-se na nossa newsletter e receba dicas de economia, novidades do setor e ofertas exclusivas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            className="flex-1 px-6 py-4 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <button className="bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-all whitespace-nowrap">
                            Inscrever-se
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
