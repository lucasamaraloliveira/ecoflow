import React, { useState } from 'react';
import { ArrowLeft, ExternalLink, Lightbulb, Zap, Sun, ShieldCheck, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
    {
        title: 'Residencial Solar Prime',
        location: 'Campinas, SP',
        savings: '95%',
        system: '6.5 kWp',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop',
        tags: ['Residencial', 'São Paulo'],
        description: 'Este projeto residencial em Campinas focou na máxima eficiência para uma família de 5 pessoas. Instalamos 12 painéis de alta performance que garantiram uma redução drástica na fatura, permitindo o uso livre de ar-condicionado durante todo o verão sem preocupações com custos.',
    },
    {
        title: 'Indústria EcoTextil',
        location: 'Joinville, SC',
        savings: '80%',
        system: '50 kWp',
        image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop',
        tags: ['Industrial', 'Santa Catarina'],
        description: 'Um dos nossos maiores desafios técnicos. A EcoTextil precisava de uma planta que suportasse o pico de consumo das máquinas de tecelagem. O sistema de 50 kWp instalado no telhado industrial estabilizou os custos operacionais da empresa, tornando-a muito mais competitiva no mercado têxtil.',
    },
    {
        title: 'Condomínio Green View',
        location: 'Goiânia, GO',
        savings: '70%',
        system: '120 kWp',
        image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop',
        tags: ['Condomínio', 'Goiás'],
        description: 'Um projeto de grande escala para as áreas comuns do Condomínio Green View. A usina solar injeta energia diretamente na rede do condomínio, reduzindo a taxa condominial para todos os moradores. Além da economia, o projeto elevou o valor de mercado de cada unidade habitacional.',
    },
    {
        title: 'Fazenda Sol Nascente',
        location: 'Uberlândia, MG',
        savings: '85%',
        system: '25 kWp',
        image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop',
        tags: ['Rural', 'Minas Gerais'],
        description: 'No setor rural, a energia solar é sinônimo de autonomia. Para a Fazenda Sol Nascente, implementamos um sistema que alimenta as bombas de irrigação e a sede. A economia gerada foi reinvestida na compra de novos equipamentos, impulsionando a produtividade da fazenda.',
    },
    {
        title: 'Centro Comercial Solar',
        location: 'Curitiba, PR',
        savings: '65%',
        system: '85 kWp',
        image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=600&auto=format&fit=crop',
        tags: ['Comercial', 'Paraná'],
        description: 'Estrategicamente instalado no coração de Curitiba, este sistema comercial cobre 100% da iluminação externa e das áreas de circulação do mall. O design da instalação foi pensado para ser visível da rua, servindo como um marco de sustentabilidade para o empreendimento.',
    },
    {
        title: 'Residência Verdes Ares',
        location: 'Vitória, ES',
        savings: '92%',
        system: '4.8 kWp',
        image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=600&auto=format&fit=crop',
        tags: ['Residencial', 'Espírito Santo'],
        description: 'Um projeto compacto mas extremamente eficiente. Localizada no litoral, a Residência Verdes Ares agora utiliza a forte insolação capixaba a seu favor. O sistema foi planejado para futura expansão, caso o cliente decida adquirir um veículo elétrico.',
    },
];

const ProjectsPage: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
                            className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300 flex flex-col"
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
                            <div className="p-8 flex flex-col flex-1">
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

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="mt-auto w-full flex items-center justify-center gap-2 bg-slate-900 dark:bg-slate-800 text-white dark:text-yellow-400 py-4 rounded-2xl font-bold hover:bg-yellow-400 hover:text-slate-900 dark:hover:bg-yellow-400 dark:hover:text-slate-900 transition-all group"
                                >
                                    Ver Detalhes do Caso
                                    <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-in fade-in duration-300">
                        <div
                            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                            onClick={() => setSelectedProject(null)}
                        ></div>
                        <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl max-h-[90vh] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row animate-in zoom-in-95 duration-300">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 z-10 p-2 bg-white/20 hover:bg-white/40 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-white rounded-full backdrop-blur-md transition-all active:scale-95"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="lg:w-1/2 h-64 lg:h-auto">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto custom-scrollbar mr-2 my-4 rounded-3xl">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedProject.tags.map(tag => (
                                        <span key={tag} className="bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-yellow-400/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-2">{selectedProject.title}</h2>
                                <p className="text-slate-500 dark:text-slate-400 font-medium mb-8 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                    {selectedProject.location}
                                </p>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-3xl border border-slate-100 dark:border-slate-800">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Economia Prevista</p>
                                        <p className="text-2xl font-black text-green-500">{selectedProject.savings}</p>
                                    </div>
                                    <div className="bg-slate-50 dark:bg-slate-800/50 p-5 rounded-3xl border border-slate-100 dark:border-slate-800">
                                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Potência Instalada</p>
                                        <p className="text-2xl font-black text-yellow-500">{selectedProject.system}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2">Resumo do Caso</h4>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                <div className="mt-10">
                                    <Link
                                        to="/#contato"
                                        onClick={() => setSelectedProject(null)}
                                        className="w-full inline-flex items-center justify-center gap-3 bg-yellow-400 text-slate-900 py-4 rounded-2xl font-black hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-400/20"
                                    >
                                        Quero um projeto assim
                                        <Zap className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

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
