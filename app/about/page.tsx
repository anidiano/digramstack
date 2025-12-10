import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
    title: "About - diagramstack",
    description: "Enterprise-ready AI diagramming platform that transforms natural language into architecture diagrams, cloud infrastructure maps, and business process flows.",
    keywords: ["AI diagram", "architecture diagrams", "AWS architecture", "Azure architecture", "GCP architecture", "cloud infrastructure", "system diagrams", "flowcharts"],
};

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation */}
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="text-xl font-bold text-gray-900 hover:text-gray-700">
                            diagramstack
                        </Link>
                        <nav className="flex items-center gap-6 text-sm">
                            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                                Canvas
                            </Link>
                            <Link href="/about" className="text-blue-600 font-semibold">
                                About
                            </Link>
                            {/* TODO: Wire to pricing page when ready */}
                            <a
                                href="#"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                                onClick={(e) => {
                                    e.preventDefault();
                                    // Placeholder for pricing page
                                }}
                            >
                                Pricing
                            </a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="prose prose-lg max-w-none">
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-bold text-gray-900 mb-2">diagramstack</h1>
                        <p className="text-xl text-gray-600 font-medium">
                            Instant AI Architect for Diagrams & Systems
                        </p>
                        <div className="flex justify-center gap-4 mt-4 text-sm">
                            <Link href="/about" className="text-blue-600 font-semibold">English</Link>
                            <span className="text-gray-400">|</span>
                            <Link href="/about/cn" className="text-gray-600 hover:text-blue-600">中文</Link>
                            <span className="text-gray-400">|</span>
                            <Link href="/about/ja" className="text-gray-600 hover:text-blue-600">日本語</Link>
                        </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                        <p className="text-amber-800">
                            This app is designed to run on Claude Opus 4.5 for best performance. However, due to higher-than-expected traffic, running the top-tier model has become cost-prohibitive. To avoid service interruptions and manage costs, I have switched the backend to Claude Haiku 4.5.
                        </p>
                    </div>

                    <p className="text-gray-700">
                        diagramstack is an enterprise-ready AI diagramming platform that transforms natural language into professional architecture diagrams, cloud infrastructure maps, and business process flows. Built for teams who need clarity, speed, and precision.
                    </p>

                    {/* Features */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Features</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li><strong>AI-Powered Architecture Diagrams</strong>: Transform natural language into professional software architecture diagrams, cloud infrastructure maps, and system designs</li>
                        <li><strong>Cloud Infrastructure Support</strong>: Specialized support for AWS, Azure, and GCP architecture diagrams with official icons and best practices</li>
                        <li><strong>Business Process Flows</strong>: Create clear, professional flowcharts and process diagrams for documentation and planning</li>
                        <li><strong>Image-Based Diagram Replication</strong>: Upload existing diagrams or images and have the AI replicate and enhance them automatically</li>
                        <li><strong>Diagram History & Version Control</strong>: Comprehensive version tracking that allows you to view and restore previous versions of your diagrams</li>
                        <li><strong>Interactive AI Chat</strong>: Refine your diagrams in real-time through natural language conversations</li>
                        <li><strong>Animated Connectors</strong>: Create dynamic visualizations with animated connectors between diagram elements</li>
                    </ul>

                    {/* Examples */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Examples</h2>
                    <p className="text-gray-700 mb-6">Here are some example prompts and their generated diagrams:</p>

                    <div className="space-y-8">
                        {/* Animated Transformer */}
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Animated Transformer Connectors</h3>
                            <p className="text-gray-600 mb-4">
                                <strong>Prompt:</strong> Give me an <strong>animated connector</strong> diagram of transformer&apos;s architecture.
                            </p>
                            <Image src="/animated_connectors.svg" alt="Transformer Architecture with Animated Connectors" width={480} height={360} className="mx-auto" />
                        </div>

                        {/* Cloud Architecture Grid */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">GCP Architecture Diagram</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    <strong>Prompt:</strong> Generate a GCP architecture diagram with <strong>GCP icons</strong>. Users connect to a frontend hosted on an instance.
                                </p>
                                <Image src="/gcp_demo.svg" alt="GCP Architecture Diagram" width={400} height={300} className="mx-auto" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">AWS Architecture Diagram</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    <strong>Prompt:</strong> Generate an AWS architecture diagram with <strong>AWS icons</strong>. Users connect to a frontend hosted on an instance.
                                </p>
                                <Image src="/aws_demo.svg" alt="AWS Architecture Diagram" width={400} height={300} className="mx-auto" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Azure Architecture Diagram</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    <strong>Prompt:</strong> Generate an Azure architecture diagram with <strong>Azure icons</strong>. Users connect to a frontend hosted on an instance.
                                </p>
                                <Image src="/azure_demo.svg" alt="Azure Architecture Diagram" width={400} height={300} className="mx-auto" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Cat Sketch</h3>
                                <p className="text-gray-600 text-sm mb-4">
                                    <strong>Prompt:</strong> Draw a cute cat for me.
                                </p>
                                <Image src="/cat_demo.svg" alt="Cat Drawing" width={240} height={240} className="mx-auto" />
                            </div>
                        </div>
                    </div>

                    {/* How It Works */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">How It Works</h2>
                    <p className="text-gray-700 mb-4">The application uses the following technologies:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li><strong>Next.js</strong>: For the frontend framework and routing</li>
                        <li><strong>Vercel AI SDK</strong> (<code>ai</code> + <code>@ai-sdk/*</code>): For streaming AI responses and multi-provider support</li>
                        <li><strong>react-drawio</strong>: For diagram representation and manipulation</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        Diagrams are represented as XML that can be rendered in draw.io. The AI processes your commands and generates or modifies this XML accordingly.
                    </p>

                    {/* Multi-Provider Support */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Multi-Provider Support</h2>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>AWS Bedrock (default)</li>
                        <li>OpenAI / OpenAI-compatible APIs (via <code>OPENAI_BASE_URL</code>)</li>
                        <li>Anthropic</li>
                        <li>Google AI</li>
                        <li>Azure OpenAI</li>
                        <li>Ollama</li>
                        <li>OpenRouter</li>
                        <li>DeepSeek</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                        Note that <code>claude-sonnet-4-5</code> has trained on draw.io diagrams with AWS logos, so if you want to create AWS architecture diagrams, this is the best choice.
                    </p>

                    {/* Support */}
                    <div className="flex items-center gap-4 mt-10 mb-4">
                        <h2 className="text-2xl font-semibold text-gray-900">Support &amp; Contact</h2>
                        <iframe
                            src="https://github.com/sponsors/DayuanJiang/button"
                            title="Sponsor DayuanJiang"
                            height="32"
                            width="114"
                            style={{ border: 0, borderRadius: 6 }}
                        />
                    </div>
                    <p className="text-gray-700">
                        If you find this project useful, please consider{" "}
                        <a href="https://github.com/sponsors/DayuanJiang" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            sponsoring
                        </a>{" "}
                        to help host the live demo site!
                    </p>
                    <p className="text-gray-700 mt-2">
                        For support or inquiries, please open an issue on the{" "}
                        <a href="https://github.com/DayuanJiang/next-ai-draw-io" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            GitHub repository
                        </a>{" "}
                        or contact: me[at]jiang.jp
                    </p>

                    {/* CTA */}
                    <div className="mt-12 text-center">
                        <Link
                            href="/"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Open Editor
                        </Link>
                    </div>
                </article>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 mt-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <p className="text-center text-gray-600 text-sm mb-2">
                        diagramstack - Enterprise AI Diagramming Platform
                    </p>
                    <p className="text-center text-gray-500 text-xs">
                        diagramstack is built on the open-source Next AI Draw.io project by Dayuan Jiang (Apache-2.0).
                    </p>
                </div>
            </footer>
        </div>
    );
}
