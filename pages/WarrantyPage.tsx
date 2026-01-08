import React from 'react';
import { ArrowLeft, Shield, Award, CheckCircle, AlertCircle, Clock, Wrench, Sun, Battery, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const WarrantyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
            {/* Header */}
            <div className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Voltar ao início</span>
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                            <Award className="w-8 h-8 text-slate-900" />
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-white">Garantia</h1>
                    </div>
                    <p className="text-xl text-green-100 max-w-2xl">
                        Proteção completa para seu investimento em energia solar
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                {/* Warranty Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            icon: <Sun className="w-10 h-10" />,
                            title: 'Módulos Fotovoltaicos',
                            years: '25 anos',
                            details: 'Garantia de desempenho linear',
                            color: 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400',
                        },
                        {
                            icon: <Zap className="w-10 h-10" />,
                            title: 'Inversor Solar',
                            years: '10 anos',
                            details: 'Garantia do fabricante',
                            color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
                        },
                        {
                            icon: <Wrench className="w-10 h-10" />,
                            title: 'Instalação',
                            years: '5 anos',
                            details: 'Mão de obra e estrutura',
                            color: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
                        },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 text-center hover:shadow-xl transition-all">
                            <div className={`w-20 h-20 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                            <p className="text-4xl font-black text-yellow-500 mb-2">{item.years}</p>
                            <p className="text-slate-500 dark:text-slate-400">{item.details}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* What's Covered */}
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">O que está coberto</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                'Defeitos de fabricação dos módulos',
                                'Degradação de eficiência acima do especificado',
                                'Falhas no inversor solar',
                                'Problemas na estrutura de fixação',
                                'Defeitos na instalação elétrica',
                                'Mau funcionamento do sistema de monitoramento',
                                'Vazamentos causados pela instalação',
                                'Falhas no string box e proteções',
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* What's NOT Covered */}
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl flex items-center justify-center">
                                <AlertCircle className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">O que NÃO está coberto</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                'Danos causados por eventos climáticos extremos*',
                                'Mau uso ou manuseio inadequado',
                                'Modificações não autorizadas no sistema',
                                'Danos causados por animais',
                                'Falta de manutenção preventiva recomendada',
                                'Problemas na rede elétrica da concessionária',
                                'Roubo ou vandalismo',
                                'Danos causados por obras no imóvel',
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-600 dark:text-slate-400">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-500 mt-6">
                            * Recomendamos a contratação de seguro residencial que cubra o sistema fotovoltaico para proteção adicional.
                        </p>
                    </div>

                    {/* Performance Guarantee */}
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10 rounded-3xl p-8 border border-yellow-200 dark:border-yellow-800 mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-yellow-400 text-slate-900 rounded-xl flex items-center justify-center">
                                <Sun className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Garantia de Desempenho</h2>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">
                            Nossos módulos fotovoltaicos possuem garantia de desempenho linear de 25 anos:
                        </p>
                        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-slate-600 dark:text-slate-400">Eficiência no ano 1</span>
                                <span className="font-bold text-slate-900 dark:text-white">≥ 98%</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 mb-6">
                                <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '98%' }}></div>
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-slate-600 dark:text-slate-400">Eficiência no ano 25</span>
                                <span className="font-bold text-slate-900 dark:text-white">≥ 84.8%</span>
                            </div>
                            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                                <div className="bg-yellow-400 h-3 rounded-full" style={{ width: '84.8%' }}></div>
                            </div>
                            <p className="text-sm text-slate-500 dark:text-slate-500 mt-4">
                                Se a eficiência cair abaixo dos níveis garantidos, o módulo será reparado ou substituído sem custo.
                            </p>
                        </div>
                    </div>

                    {/* How to Request */}
                    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800 mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Como Solicitar Garantia</h2>
                        </div>
                        <ol className="space-y-4">
                            {[
                                { step: 1, title: 'Identifique o problema', desc: 'Verifique no app de monitoramento se há alguma anomalia no sistema.' },
                                { step: 2, title: 'Entre em contato', desc: 'Ligue para (11) 98765-4321 ou envie e-mail para garantia@ecoflow.com.br' },
                                { step: 3, title: 'Abertura do chamado', desc: 'Nossa equipe registrará o chamado e coletará informações necessárias.' },
                                { step: 4, title: 'Visita técnica', desc: 'Um técnico visitará o local para diagnóstico em até 5 dias úteis.' },
                                { step: 5, title: 'Resolução', desc: 'O reparo ou substituição será realizado conforme os termos da garantia.' },
                            ].map((item) => (
                                <li key={item.step} className="flex gap-4">
                                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* CTA */}
                    <div className="text-center bg-slate-900 dark:bg-slate-800 rounded-3xl p-12">
                        <Shield className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-white mb-4">Precisa de Suporte?</h2>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Nossa equipe está pronta para ajudar com qualquer problema relacionado ao seu sistema.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:+5511987654321" className="inline-flex items-center justify-center bg-yellow-400 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-yellow-500 transition-all">
                                Ligar Agora
                            </a>
                            <Link to="/ajuda" className="inline-flex items-center justify-center bg-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all">
                                Central de Ajuda
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WarrantyPage;
