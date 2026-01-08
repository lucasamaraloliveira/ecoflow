import React from 'react';
import { ArrowLeft, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
    {
        name: 'Carlos Eduardo Silva',
        role: 'CEO & Fundador',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
        bio: 'Engenheiro elétrico com 20 anos de experiência em energia renovável.',
    },
    {
        name: 'Ana Paula Mendes',
        role: 'Diretora de Operações',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
        bio: 'Especialista em gestão de projetos com foco em eficiência operacional.',
    },
    {
        name: 'Roberto Almeida',
        role: 'Diretor Técnico',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
        bio: 'Mestre em engenharia de sistemas fotovoltaicos pela USP.',
    },
    {
        name: 'Juliana Costa',
        role: 'Diretora Comercial',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
        bio: '15 anos de experiência em vendas consultivas B2B e B2C.',
    },
    {
        name: 'Fernando Rocha',
        role: 'Diretor Financeiro',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop',
        bio: 'CPA com especialização em finanças corporativas e M&A.',
    },
    {
        name: 'Mariana Torres',
        role: 'Diretora de Marketing',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
        bio: 'Especialista em marketing digital e branding sustentável.',
    },
];

const TeamPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
            {/* Header */}
            <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Voltar ao início</span>
                    </Link>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-4">Nossa Equipe</h1>
                    <p className="text-xl text-blue-100 max-w-2xl">
                        Conheça os profissionais que fazem da EcoFlow uma referência em energia solar no Brasil.
                    </p>
                </div>
            </div>

            {/* Team Grid */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, idx) => (
                        <div
                            key={idx}
                            className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-yellow-400 transition-colors">
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-yellow-400 transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
                                <p className="text-yellow-500 font-semibold mb-3">{member.role}</p>
                                <p className="text-slate-600 dark:text-slate-400 text-sm">{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join Team CTA */}
                <div className="mt-20 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        Quer fazer parte do time?
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
                        Estamos sempre em busca de talentos apaixonados por energia renovável e inovação.
                    </p>
                    <Link to="/carreiras" className="inline-flex bg-slate-900 dark:bg-yellow-400 text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 dark:hover:bg-yellow-500 transition-all">
                        Ver Vagas Abertas
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TeamPage;
