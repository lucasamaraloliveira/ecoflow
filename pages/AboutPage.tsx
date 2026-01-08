import React from 'react';
import { ArrowLeft, Award, Users, Target, Heart, CheckCircle2, ShieldCheck, Zap, Globe, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
            {/* Header / Hero */}
            <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-900 hover:translate-x-[-4px] transition-transform mb-8 group">
                        <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="font-bold uppercase tracking-wider text-xs">Voltar ao início</span>
                    </Link>
                    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">
                            Nossa <span className="text-white">Missão</span> de Iluminar o Futuro
                        </h1>
                        <p className="text-xl text-slate-900/80 max-w-2xl font-medium leading-relaxed">
                            A EcoFlow não apenas instala painéis; nós construímos um legado de autonomia energética e sustentabilidade para as próximas gerações brasileiras.
                        </p>
                    </div>
                </div>
            </div>

            {/* Impact Section */}
            <div className="container mx-auto px-6 -mt-12 relative z-20">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                    {[
                        { label: 'Projetos Entregues', value: '10k+', icon: <Users /> },
                        { label: 'Cidades Atendidas', value: '450+', icon: <Globe /> },
                        { label: 'Potência Instalada', value: '85MW', icon: <Zap /> },
                        { label: 'Anos de Mercado', value: '10+', icon: <Calendar /> },
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 p-6 lg:p-8 rounded-3xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in duration-500 delay-150">
                            <div className="w-12 h-12 bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 rounded-xl flex items-center justify-center mb-4">
                                {React.cloneElement(stat.icon as React.ReactElement, { className: 'w-6 h-6' })}
                            </div>
                            <div className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</div>
                            <div className="text-xs lg:text-sm font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content / Story */}
            <div className="container mx-auto px-6 py-24">
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                        <div>
                            <span className="text-yellow-500 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Nossa Jornada</span>
                            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                                De um Sonho em 2015 à Liderança em 2025
                            </h2>
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            A EcoFlow nasceu com uma visão clara: democratizar o acesso à energia solar no Brasil.
                            Fundada por engenheiros apaixonados por sustentabilidade, rapidamente nos tornamos um símbolo de
                            inovação e confiança no setor energético.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Engenharia Própria de Alta Performance</p>
                            </div>
                            <div className="flex gap-4">
                                <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                                <p className="text-sm font-bold text-slate-700 dark:text-slate-300">Suporte Técnico 24h e Monitoramento</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000">
                        <div className="absolute -inset-6 bg-yellow-400 rounded-[3rem] opacity-20 blur-3xl animate-pulse"></div>
                        <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1470&auto=format&fit=crop"
                                alt="Escritório EcoFlow"
                                className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>

                {/* Timeline / Milestones */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4">Marcos de Evolução</h2>
                        <div className="w-20 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 relative">
                        <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 -z-10"></div>
                        {[
                            { year: '2015', title: 'A Fundação', desc: 'Início das atividades com foco em residências de pequeno porte.' },
                            { year: '2018', title: 'Expansão Industrial', desc: 'Atendimento às primeiras grandes indústrias e parques solares.' },
                            { year: '2023', title: 'EcoTech Launch', desc: 'Lançamento de nossa tecnologia própria de monitoramento IA.' },
                        ].map((item, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="w-10 h-10 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center font-black mx-auto mb-6 shadow-lg shadow-yellow-400/40 group-hover:scale-125 transition-transform">
                                    {idx + 1}
                                </div>
                                <h3 className="text-2xl font-black text-yellow-500 mb-2">{item.year}</h3>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-3 tracking-tight uppercase text-sm">{item.title}</h4>
                                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Values & Certs */}
                <div className="grid lg:grid-cols-3 gap-8 mb-32">
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                        {[
                            { icon: <Target className="w-8 h-8" />, title: 'Missão', desc: 'Transformar vidas através da energia solar, gerando economia e sustentabilidade real.' },
                            { icon: <Award className="w-8 h-8" />, title: 'Qualidade', desc: 'Parcerias com os maiores fabricantes globais Tier 1 para garantir durabilidade.' },
                            { icon: <Heart className="w-8 h-8" />, title: 'Valores', desc: 'Integridade absoluta, inovação constante e foco obsessivo no sucesso do cliente.' },
                            { icon: <Users className="w-8 h-8" />, title: 'Nossa Gente', desc: 'Time de especialistas certificados e apaixonados pela revolução energética.' },
                        ].map((item, idx) => (
                            <div key={idx} className="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:border-yellow-400/50 transition-all hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-none group">
                                <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 text-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="bg-slate-900 dark:bg-slate-900/50 rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-center border border-white/5">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <ShieldCheck className="w-32 h-32" />
                        </div>
                        <h3 className="text-2xl font-black mb-6 relative z-10 text-yellow-400">Certificações e Parcerias</h3>
                        <div className="space-y-6 relative z-10">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-black italic text-xs">ABS</div>
                                <div>
                                    <p className="font-bold text-sm">Membro ABSOLAR</p>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Associação Brasileira</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-black italic text-xs tracking-tighter uppercase p-2 text-center leading-none">ISO 9001</div>
                                <div>
                                    <p className="font-bold text-sm">Selo de Qualidade ISO</p>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Processos Certificados</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-black italic text-xs tracking-tighter uppercase p-2 text-center leading-none">Tier 1</div>
                                <div>
                                    <p className="font-bold text-sm">Parceiros Tier 1</p>
                                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Hardware Premium</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-[100px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full"></div>
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 relative z-10 leading-tight">
                        Clique abaixo e comece seu <span className="text-yellow-400 italic">Legado Sustentável</span>
                    </h2>
                    <p className="text-slate-400 mb-10 max-w-2xl mx-auto lg:text-lg relative z-10">
                        Nossos especialistas estão prontos para desenhar o projeto ideal para sua necessidade.
                    </p>
                    <Link to="/#contato" className="inline-flex bg-yellow-400 text-slate-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white hover:scale-105 transition-all shadow-xl shadow-yellow-400/20 active:scale-95 relative z-10">
                        Solicitar Estudo Gratuito
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutPage;
