import React from 'react';
import { ArrowLeft, MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const jobs = [
    {
        title: 'Engenheiro de Projetos Fotovoltaicos',
        location: 'São Paulo, SP',
        type: 'Tempo Integral',
        department: 'Engenharia',
        description: 'Responsável pelo dimensionamento e elaboração de projetos técnicos de sistemas fotovoltaicos.',
    },
    {
        title: 'Consultor de Vendas',
        location: 'Todo o Brasil (Remoto)',
        type: 'Tempo Integral',
        department: 'Comercial',
        description: 'Atendimento consultivo a clientes interessados em energia solar residencial e comercial.',
    },
    {
        title: 'Técnico de Instalação',
        location: 'Belo Horizonte, MG',
        type: 'Tempo Integral',
        department: 'Operações',
        description: 'Instalação e manutenção de sistemas de energia solar em residências e empresas.',
    },
    {
        title: 'Analista de Marketing Digital',
        location: 'São Paulo, SP (Híbrido)',
        type: 'Tempo Integral',
        department: 'Marketing',
        description: 'Gestão de campanhas digitais, SEO, mídia paga e estratégias de growth.',
    },
    {
        title: 'Estágio em Engenharia Elétrica',
        location: 'Rio de Janeiro, RJ',
        type: 'Estágio',
        department: 'Engenharia',
        description: 'Auxílio no desenvolvimento de projetos e análise de viabilidade técnica.',
    },
];

const CareersPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
            {/* Header */}
            <div className="bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-600 pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Voltar ao início</span>
                    </Link>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-4">Carreiras</h1>
                    <p className="text-xl text-emerald-100 max-w-2xl">
                        Junte-se à nossa missão de transformar o Brasil através da energia solar.
                    </p>
                </div>
            </div>

            {/* Benefits */}
            <div className="container mx-auto px-6 py-20">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
                    Por que trabalhar na EcoFlow?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {[
                        { title: 'Propósito', desc: 'Trabalhe em algo que faz diferença para o planeta.' },
                        { title: 'Crescimento', desc: 'Plano de carreira estruturado e oportunidades reais.' },
                        { title: 'Benefícios', desc: 'Plano de saúde, vale refeição, PLR e muito mais.' },
                        { title: 'Flexibilidade', desc: 'Modelo híbrido e horários flexíveis quando possível.' },
                    ].map((benefit, idx) => (
                        <div key={idx} className="text-center p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{benefit.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Open Positions */}
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Vagas Abertas</h2>
                <div className="space-y-6">
                    {jobs.map((job, idx) => (
                        <div
                            key={idx}
                            className="group bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-yellow-400 transition-all cursor-pointer"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-yellow-500 transition-colors">
                                        {job.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mt-2">{job.description}</p>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        <span className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                                            <MapPin className="w-4 h-4" /> {job.location}
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                                            <Clock className="w-4 h-4" /> {job.type}
                                        </span>
                                        <span className="inline-flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                                            <Briefcase className="w-4 h-4" /> {job.department}
                                        </span>
                                    </div>
                                </div>
                                <button className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white px-6 py-3 rounded-xl font-semibold group-hover:bg-yellow-400 group-hover:text-slate-900 transition-all whitespace-nowrap">
                                    Candidatar-se
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No matching position */}
                <div className="mt-16 text-center bg-slate-100 dark:bg-slate-900 rounded-3xl p-12">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                        Não encontrou uma vaga ideal?
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xl mx-auto">
                        Envie seu currículo para nosso banco de talentos e entraremos em contato quando surgir uma oportunidade.
                    </p>
                    <a href="mailto:carreiras@ecoflow.com.br" className="inline-flex bg-slate-900 dark:bg-yellow-400 text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 dark:hover:bg-yellow-500 transition-all">
                        Enviar Currículo
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
