import React from 'react';
import { ArrowLeft, Search, MessageCircle, Phone, Mail, HelpCircle, ChevronDown, ChevronUp, Book, Settings, CreditCard, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        category: 'Instalação',
        icon: <Settings className="w-5 h-5" />,
        questions: [
            { q: 'Quanto tempo leva a instalação?', a: 'O tempo de instalação varia de acordo com o tamanho do sistema. Para sistemas residenciais, geralmente leva de 1 a 3 dias. Sistemas comerciais maiores podem levar até uma semana.' },
            { q: 'Preciso fazer obras no telhado?', a: 'Na maioria dos casos, não são necessárias obras. Nossos painéis são instalados sobre a estrutura existente. Se houver necessidade de reforço, informaremos na visita técnica.' },
            { q: 'Meu telhado aguenta o peso dos painéis?', a: 'Os painéis solares são relativamente leves (cerca de 18-20 kg cada). A maioria dos telhados suporta sem problemas. Nossa equipe técnica avalia a estrutura antes da instalação.' },
        ]
    },
    {
        category: 'Financeiro',
        icon: <CreditCard className="w-5 h-5" />,
        questions: [
            { q: 'Quais formas de pagamento são aceitas?', a: 'Aceitamos à vista, cartão de crédito em até 12x, e financiamento bancário em até 60x com taxas especiais.' },
            { q: 'Quando começo a economizar?', a: 'A economia começa imediatamente após a instalação e conexão à rede. No primeiro mês você já perceberá a diferença na sua conta de luz.' },
            { q: 'Existe algum custo de manutenção?', a: 'Os custos de manutenção são mínimos. Recomendamos limpeza periódica dos painéis e verificação anual do sistema, serviços que oferecemos opcionalmente.' },
        ]
    },
    {
        category: 'Funcionamento',
        icon: <Zap className="w-5 h-5" />,
        questions: [
            { q: 'Como funciona em dias nublados?', a: 'Os painéis continuam gerando energia mesmo em dias nublados, embora com menor eficiência. O sistema compensa isso com a energia acumulada nos créditos junto à concessionária.' },
            { q: 'Preciso de bateria para armazenar energia?', a: 'Não necessariamente. No sistema on-grid (conectado à rede), a energia excedente vai para a rede e gera créditos para uso posterior. Baterias são opcionais.' },
            { q: 'E se faltar energia da rua?', a: 'Por questões de segurança, sistemas on-grid desligam automaticamente durante quedas de energia. Se desejar independência total, oferecemos soluções com baterias.' },
        ]
    },
];

const HelpCenterPage: React.FC = () => {
    const [openFaq, setOpenFaq] = React.useState<string | null>(null);
    const [searchQuery, setSearchQuery] = React.useState('');

    const toggleFaq = (id: string) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors">
            {/* Header */}
            <div className="bg-gradient-to-br from-cyan-500 via-cyan-600 to-blue-600 pt-32 pb-20">
                <div className="container mx-auto px-6">
                    <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Voltar ao início</span>
                    </Link>
                    <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-4">Central de Ajuda</h1>
                    <p className="text-xl text-cyan-100 max-w-2xl mb-8">
                        Encontre respostas para suas dúvidas ou entre em contato com nossa equipe.
                    </p>

                    {/* Search */}
                    <div className="max-w-2xl relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Digite sua dúvida..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-0 focus:outline-none focus:ring-4 focus:ring-white/30 shadow-xl"
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                {/* Quick Contact Options */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {[
                        { icon: <MessageCircle className="w-6 h-6" />, title: 'Chat Online', desc: 'Fale conosco em tempo real', action: 'Iniciar Chat' },
                        { icon: <Phone className="w-6 h-6" />, title: 'Telefone', desc: '(11) 98765-4321', action: 'Ligar Agora' },
                        { icon: <Mail className="w-6 h-6" />, title: 'E-mail', desc: 'suporte@ecoflow.com.br', action: 'Enviar E-mail' },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all flex items-center gap-4">
                            <div className="w-14 h-14 bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                                {item.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                            </div>
                            <button className="text-cyan-500 font-semibold text-sm hover:text-cyan-600 transition-colors whitespace-nowrap">
                                {item.action}
                            </button>
                        </div>
                    ))}
                </div>

                {/* FAQ Sections */}
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                    <HelpCircle className="w-8 h-8 text-yellow-500" />
                    Perguntas Frequentes
                </h2>

                <div className="space-y-8">
                    {faqs.map((category, catIdx) => (
                        <div key={catIdx} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden">
                            <div className="flex items-center gap-3 p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                                <div className="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-lg flex items-center justify-center">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{category.category}</h3>
                            </div>
                            <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                {category.questions.map((faq, faqIdx) => {
                                    const id = `${catIdx}-${faqIdx}`;
                                    const isOpen = openFaq === id;
                                    return (
                                        <div key={faqIdx}>
                                            <button
                                                onClick={() => toggleFaq(id)}
                                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
                                            >
                                                <span className="font-semibold text-slate-900 dark:text-white pr-4">{faq.q}</span>
                                                {isOpen ? (
                                                    <ChevronUp className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                                ) : (
                                                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                                )}
                                            </button>
                                            {isOpen && (
                                                <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed">
                                                    {faq.a}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still Need Help */}
                <div className="mt-16 text-center bg-slate-900 dark:bg-slate-800 rounded-3xl p-12">
                    <Book className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-white mb-4">Ainda precisa de ajuda?</h2>
                    <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                        Nossa equipe de suporte está disponível de segunda a sexta, das 8h às 18h.
                    </p>
                    <Link to="/#contato" className="inline-flex bg-yellow-400 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-yellow-500 transition-all">
                        Falar com Especialista
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HelpCenterPage;
