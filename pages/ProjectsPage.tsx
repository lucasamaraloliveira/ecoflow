import React from 'react';
import { ArrowLeft, ExternalLink, Lightbulb, Zap, Sun, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: 'Residencial Solar Prime',
        location: 'Campinas, SP',
        savings: '95%',
        system: '6.5 kWp',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop',
        tags: ['Residencial', 'São Paulo'],
    },
    {
        title: 'Indústria EcoTextil',
        location: 'Joinville, SC',
        savings: '80%',
        system: '50 kWp',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop',
        tags: ['Industrial', 'Santa Catarina'],
    },
    {
        title: 'Condomínio Green View',
        location: 'Goiânia, GO',
        savings: '70%',
        system: '120 kWp',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop',
        tags: ['Condomínio', 'Goiás'],
    },
    {
        title: 'Fazenda Sol Nascente',
        location: 'Uberlândia, MG',
        savings: '85%',
        system: '25 kWp',
        image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop',
        tags: ['Rural', 'Minas Gerais'],
    },
    {
        title: 'Centro Comercial Solar',
        location: 'Curitiba, PR',
        savings: '65%',
        system: '85 kWp',
        image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=600&auto=format&fit=crop',
        tags: ['Comercial', 'Paraná'],
    },
    {
        title: 'Residência Verdes Ares',
        location: 'Vitória, ES',
        savings: '92%',
        system: '4.8 kWp',
        image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=600&auto=format&fit=crop',
        tags: ['Residencial', 'Espírito Santo'],
    },
];

const ProjectsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
            {/* Header */}
            <div className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-600 pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Voltar ao início</span>
                    </Link>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-4">Nossos Projetos</h1>
                    <p className="text-xl text-orange-100 max-w-2xl">
                        Inspire-se com algumas de nossas instalações recentes em todo o Brasil.
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                                <p className="text-slate-500 dark:text-slate-400 mb-6 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                                    {project.location}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Economia</p>
                                        <p className="text-xl font-black text-green-500">{project.savings}</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Potência</p>
                                        <p className="text-xl font-black text-yellow-500">{project.system}</p>
                                    </div>
                                </div>

                                <button className="w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-800 text-white dark:text-yellow-400 py-4 rounded-2xl font-bold hover:bg-yellow-400 hover:text-slate-900 dark:hover:bg-yellow-400 dark:hover:text-slate-900 transition-all group">
                                    Ver Detalhes do Caso
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats Section in Projects */}
                <div className="mt-24 grid lg:grid-cols-4 gap-8">
                    {[
                        { icon: <Sun className="text-yellow-500" />, val: '10.000+', label: 'Instalações' },
                        { icon: <Zap className="text-blue-500" />, val: '250 MWp', label: 'Gerados' },
                        { icon: <ShieldCheck className="text-green-500" />, val: '25 Anos', label: 'Garantia' },
                        { icon: <Lightbulb className="text-orange-500" />, val: '95%', label: 'Economia' },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
                            <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mx-auto mb-4">
                                {stat.icon}
                            </div>
                            <p className="text-3xl font-black text-slate-900 dark:text-white mb-1">{stat.val}</p>
                            <p className="text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-20 text-center bg-slate-900 dark:bg-slate-900 border border-slate-800 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-3xl -z-0"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-6">Seu projeto pode ser o próximo</h2>
                        <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                            Entre em contato hoje mesmo e peça um estudo técnico de viabilidade para seu imóvel. É rápido, gratuito e sem compromisso.
                        </p>
                        <Link to="/#contato" className="inline-flex bg-yellow-400 text-slate-900 px-10 py-5 rounded-2xl font-black text-lg hover:bg-yellow-500 hover:scale-105 transition-all shadow-xl shadow-yellow-400/20">
                            Começar Meu Projeto
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
