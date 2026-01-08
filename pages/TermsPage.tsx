import React from 'react';
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, Scale, Users, Clock, Ban } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
            {/* Header */}
            <div className="bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Voltar ao início</span>
                    </Link>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center">
                            <FileText className="w-8 h-8 text-slate-900" />
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-extrabold text-white">Termos de Uso</h1>
                    </div>
                    <p className="text-xl text-indigo-200 max-w-2xl">
                        Condições gerais de uso do site e contratação de serviços
                    </p>
                    <p className="text-sm text-indigo-300 mt-4">Última atualização: Janeiro de 2026</p>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    {/* Introduction Alert */}
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-2xl p-6 mb-12 flex gap-4">
                        <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">Importante</h3>
                            <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                                Ao utilizar nosso site ou contratar nossos serviços, você concorda com estes Termos de Uso.
                                Leia atentamente antes de prosseguir. Em caso de dúvidas, entre em contato conosco.
                            </p>
                        </div>
                    </div>

                    {/* Sections */}
                    <div className="space-y-12">
                        {[
                            {
                                icon: <CheckCircle className="w-6 h-6" />,
                                title: '1. Aceitação dos Termos',
                                content: `Ao acessar e utilizar o site da EcoFlow Energia Solar ("Site") ou contratar nossos serviços, você ("Usuário") declara ter lido, entendido e concordado integralmente com estes Termos de Uso.

Caso não concorde com qualquer disposição destes termos, solicitamos que não utilize nosso Site nem contrate nossos serviços.

A EcoFlow reserva-se o direito de modificar estes Termos a qualquer momento, sendo as alterações publicadas nesta página. O uso continuado do Site após modificações implica aceitação das novas condições.`
                            },
                            {
                                icon: <Users className="w-6 h-6" />,
                                title: '2. Elegibilidade',
                                content: `Para utilizar nossos serviços, você deve:

• Ter capacidade civil plena (maiores de 18 anos ou emancipados)
• Possuir autorização legal para contratar em nome de pessoa jurídica, quando aplicável
• Fornecer informações verdadeiras, completas e atualizadas
• Ser proprietário ou ter autorização do proprietário do imóvel para instalação

A EcoFlow reserva-se o direito de recusar serviços a qualquer pessoa, por qualquer motivo, a qualquer momento.`
                            },
                            {
                                icon: <Scale className="w-6 h-6" />,
                                title: '3. Serviços Oferecidos',
                                content: `A EcoFlow oferece:

**Consultoria e Orçamento**
• Análise de viabilidade técnica e econômica
• Dimensionamento do sistema fotovoltaico
• Elaboração de proposta comercial personalizada

**Instalação**
• Projeto técnico aprovado pela concessionária
• Fornecimento de equipamentos certificados
• Instalação por equipe técnica qualificada
• Homologação junto à concessionária de energia

**Pós-venda**
• Monitoramento remoto do sistema
• Suporte técnico especializado
• Manutenção preventiva e corretiva

Os prazos, condições e valores específicos são detalhados no contrato de prestação de serviços.`
                            },
                            {
                                icon: <Ban className="w-6 h-6" />,
                                title: '4. Uso Proibido',
                                content: `É expressamente proibido:

• Utilizar o Site para fins ilegais ou não autorizados
• Tentar acessar áreas restritas ou sistemas de segurança
• Transmitir vírus, malware ou códigos maliciosos
• Coletar dados de outros usuários sem autorização
• Reproduzir, copiar ou distribuir conteúdo sem permissão
• Utilizar informações do Site para fins comerciais não autorizados
• Difamar, assediar ou prejudicar a EcoFlow ou terceiros
• Interferir no funcionamento adequado do Site

A violação destas proibições pode resultar em medidas legais cabíveis.`
                            },
                            {
                                icon: <FileText className="w-6 h-6" />,
                                title: '5. Propriedade Intelectual',
                                content: `Todo o conteúdo do Site, incluindo, mas não limitado a:

• Textos, imagens, gráficos e vídeos
• Logotipos, marcas e identidade visual
• Layout, design e código-fonte
• Metodologias e processos proprietários

São de propriedade exclusiva da EcoFlow ou de seus licenciadores e estão protegidos pela legislação brasileira de propriedade intelectual.

É permitido o uso pessoal e não comercial do conteúdo, desde que mantidas as indicações de autoria e propriedade.`
                            },
                            {
                                icon: <Clock className="w-6 h-6" />,
                                title: '6. Limitação de Responsabilidade',
                                content: `A EcoFlow não se responsabiliza por:

• Interrupções temporárias no funcionamento do Site
• Erros ou imprecisões em conteúdos informativos
• Danos decorrentes de uso indevido do Site pelo Usuário
• Falhas de conexão ou problemas de infraestrutura de terceiros
• Ações de hackers ou ataques cibernéticos

Para serviços contratados, as responsabilidades são definidas no contrato específico, incluindo garantias de equipamentos e instalação.

A responsabilidade máxima da EcoFlow está limitada ao valor efetivamente pago pelo serviço contratado.`
                            },
                        ].map((section, idx) => (
                            <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-100 dark:border-slate-800">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center">
                                        {section.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{section.title}</h2>
                                </div>
                                <div className="text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                                    {section.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Jurisdiction */}
                    <div className="mt-12 bg-slate-100 dark:bg-slate-800 rounded-2xl p-8">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">7. Foro e Legislação Aplicável</h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Estes Termos de Uso são regidos pela legislação da República Federativa do Brasil.
                            Fica eleito o foro da Comarca de São Paulo, Estado de São Paulo, para dirimir quaisquer
                            controvérsias decorrentes destes termos, com renúncia expressa a qualquer outro, por mais
                            privilegiado que seja.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="mt-16 text-center bg-indigo-600 dark:bg-indigo-800 rounded-3xl p-8">
                        <FileText className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                        <h2 className="text-2xl font-bold text-white mb-4">Dúvidas sobre os Termos?</h2>
                        <p className="text-indigo-200 mb-6">
                            Entre em contato com nossa equipe jurídica:
                        </p>
                        <p className="text-yellow-400 font-bold text-lg">juridico@ecoflow.com.br</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
