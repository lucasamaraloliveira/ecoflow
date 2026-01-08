import React from 'react';
import { ArrowLeft, Award, Users, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
            {/* Header */}
            <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-slate-900 hover:text-slate-700 mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Voltar ao início</span>
                    </Link>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 mb-4">Sobre Nós</h1>
                    <p className="text-xl text-slate-800 max-w-2xl">
                        Conheça a história da EcoFlow e nossa missão de transformar o Brasil em referência mundial em energia renovável.
                    </p>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Nossa História</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            A EcoFlow nasceu em 2015 com uma visão clara: democratizar o acesso à energia solar no Brasil.
                            Fundada por engenheiros apaixonados por sustentabilidade, a empresa rapidamente se destacou pela
                            qualidade de seus projetos e pelo compromisso com a excelência.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Hoje, somos uma das maiores empresas de energia solar do país, com mais de 10.000 projetos
                            instalados em todas as regiões do Brasil. Nossa equipe conta com mais de 300 colaboradores
                            dedicados a proporcionar a melhor experiência para nossos clientes.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-yellow-400 rounded-3xl opacity-20 blur-2xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=1470&auto=format&fit=crop"
                            alt="Escritório EcoFlow"
                            className="relative rounded-3xl shadow-2xl w-full object-cover aspect-video"
                        />
                    </div>
                </div>

                {/* Values */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {[
                        { icon: <Target className="w-8 h-8" />, title: 'Missão', desc: 'Transformar vidas através da energia solar, gerando economia e sustentabilidade.' },
                        { icon: <Award className="w-8 h-8" />, title: 'Visão', desc: 'Ser a maior e mais confiável empresa de energia solar da América Latina.' },
                        { icon: <Heart className="w-8 h-8" />, title: 'Valores', desc: 'Integridade, inovação, sustentabilidade e foco total no cliente.' },
                        { icon: <Users className="w-8 h-8" />, title: 'Cultura', desc: 'Colaboração, aprendizado contínuo e paixão por fazer a diferença.' },
                    ].map((item, idx) => (
                        <div key={idx} className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-2xl flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center bg-slate-900 dark:bg-slate-800 rounded-3xl p-12">
                    <h2 className="text-3xl font-bold text-white mb-4">Faça parte dessa história</h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        Junte-se a milhares de brasileiros que já economizam com energia solar.
                    </p>
                    <Link to="/#contato" className="inline-flex bg-yellow-400 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-yellow-500 transition-all">
                        Solicitar Orçamento
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
