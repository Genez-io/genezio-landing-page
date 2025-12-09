import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router";
import {
    ArrowLeftIcon,
    LinkedinIcon,
    TwitterIcon,
    MailIcon,
    ClockIcon,
    CalendarIcon,
} from "lucide-react";
import { getAllPosts } from "@/lib/posts";

// Author data
const authors: Record<string, any> = {
    "andra-pitis": {
        "name": "Andra Pitis",
        "role": "Contributor",
        "bio": 'Andra Pitiș is passionate about technology, design, and how people interact with digital products. At DeployApps, she worked as a UI/UX Designer, helping shape an intuitive experience for developers and refining the serverless platform. She loves finding the perfect balance between functionality and simplicity, making technology easier to use and more accessible for everyone.\n\nShe studied Computer Science at The University of Manchester and went on to pursue a Master’s in User Experience Design at Universitat de Barcelona. Along the way, she also explored technical writing and project management, gaining a broad perspective on building great products. Now, she’s an Engineering Program Manager at Adobe, but she stays connected to the startup world and the process of creating things that truly make a difference.',
        "image": "/authors/andra-pitis.webp",
        "location": "Remote",
        "social": {
            "linkedin": "https://www.linkedin.com/in/andra-pitis/",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "andreia-ocanoaia": {
        "name": "Andreia Ocanoaia",
        "role": "Contributor",
        "bio": 'Andreia Ocanoaia is the Head of Design at DeployApps, where she leads the creative vision and user experience strategy for the platform. With a strong background in UI/UX design and a passion for crafting intuitive digital products, Andreia ensures that DeployApps is not only functional but also visually engaging and easy to navigate for developers.\n\nBringing years of experience in designing for tech-driven solutions, Andreia focuses on bridging the gap between complex functionality and seamless usability. Her work is central to delivering a polished, developer-friendly experience that empowers users to deploy applications with confidence and ease.',
        "image": "/authors/andreia-ocanoaia.webp",
        "location": "Remote",
        "social": {
            "linkedin": "https://www.linkedin.com/in/andreia-ocanoaia-24467713a/",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "bogdan-ciobanu": {
        "name": "Bogdan Ciobanu",
        "role": "Contributor",
        "bio": 'Bogdan Ciobanu is a software engineer at DeployApps and a passionate researcher in quantum computing and communication at University POLITEHNICA of Bucharest. At DeployApps, he’s focused on building reliable and efficient solutions for developers, combining his expertise in software engineering with his curiosity for cutting-edge technology. With a strong academic background, Bogdan has worked as a Teaching Assistant for courses like Numerical Methods and Modeling and Simulation, helping students tackle complex problems in computer science. He’s also had several internships at Google, where he gained hands-on experience working on large-scale, impactful projects. Whether he’s coding, teaching, or researching, Bogdan is always driven by a desire to innovate and push the boundaries of what’s possible.',
        "image": "/authors/bogdan-ciobanu.webp",
        "location": "Remote",
        "social": {
            "linkedin": "https://www.linkedin.com/in/ciobanubogdan/",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "bogdan-ripa": {
        "name": "Bogdan Ripa",
        "role": "Contributor",
        "bio": "Bogdan Ripa is a co-founder and product leader with a strong entrepreneurial background. He co-founded InterAKT Online, which was later acquired by Adobe, where he played a key role in scaling the Romanian campus and driving product innovation. After eight years at Adobe, he transitioned back into the startup ecosystem, leading Vector Watch’s product management before its acquisition by Fitbit, where he contributed to gamification and social features. He then served as SVP of Product Management at UiPath, expanding its product suite with automation and AI-driven solutions. Currently, Bogdan is the Co-Founder and CPO at DeployApps, focusing on developer productivity and application deployment. He also advises MyBenefits, guiding product and growth strategies. With expertise in agile methodologies, product-market fit, and scaling tech products, Bogdan continues to shape the future of software development and automation.",
        "image": "/authors/bogdan-ripa.webp",
        "location": "Remote",
        "social": {
            "linkedin": "https://www.linkedin.com/in/bogdanripa/",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "bogdan-vlad": {
        "name": "Bogdan Vlad",
        "role": "Contributor",
        "bio": "Bogdan Vlad is the Co-Founder and Chief Technology Officer at DeployApps, where he leads the development of tools that make serverless app creation faster and more accessible. With over a decade of experience in software engineering, he’s worked on everything from mobile platforms to embedded systems, mastering technologies like Java, Objective C, Swift, Golang, and more. Before starting DeployApps, Bogdan held roles at companies like Fitbit and Vector Watch, where he built innovative solutions for IoT and mobile applications, even earning a patent for energy-efficient display technology. A strong believer in giving back, he’s been an active mentor, speaker, and teacher in the tech community, empowering developers to push boundaries and create impactful products. When he’s not busy driving innovation at DeployApps, Bogdan enjoys exploring new frameworks and contributing to open-source projects.",
        "image": "/authors/bogdan-vlad.webp",
        "location": "Remote",
        "social": {
            "linkedin": "https://www.linkedin.com/in/vlad-bogdan-florentin-022026227/",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "costin-sin": {
        "name": "Costin Sin",
        "role": "Contributor",
        "bio": "Costin Sin is a software engineer with a knack for solving complex problems and building efficient, scalable solutions. During his time at DeployApps, he made over 2000 GitHub contributions, redesigning key components like the YAML configuration format, enabling Next.js support, and integrating PostgreSQL and MongoDB hosting. His work has had a significant impact on making DeployApps’s serverless platform more accessible and user-friendly for developers. With a Bachelor’s degree in Computer Science from the University POLITEHNICA of Bucharest, Costin has also been active in academia as a Teaching Assistant, helping students master subjects like operating systems, data structures, and assembly programming. Currently, he’s continuing to tackle big challenges as a Software Engineer at Google, where his passion for technology and innovation shines.",
        "image": "/authors/costin-sin.webp",
        "location": "Remote",
        "social": {
            "linkedin": "https://www.linkedin.com/in/costin-sin/",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "cristi-miloiu": {
        "name": "Cristi Miloiu",
        "role": "Contributor",
        "bio": "Cristi Miloiu is a Software Engineer at DeployApps, where he focuses on building innovative features and creating tools that empower developers. A key part of his work includes implementing deployment support for Python frameworks like FastAPI, Flask, and Django, as well as enhancing the Node.js ecosystem by adding support for NestJS and maintaining compatibility with Next.js. Cristi has also contributed to the platform by developing user management features, including GoogleAuth and email-password authentication, and by improving the developer experience through clear documentation and tutorials. Currently in his final year at the Faculty of Electronics, Telecommunications, and Information Technology at the University POLITEHNICA of Bucharest, Cristi has been working in the tech field since his first year of university. He actively develops both open-source projects and community-driven initiatives. Passionate about volunteering, he has also served as a tech coordinator, helping others grow and succeed in their projects.",
        "image": "/authors/cristi-miloiu.webp",
        "location": "Remote",
        "social": {
            "linkedin": "https://www.linkedin.com/in/cristian-miloiu/",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "denisa-lera": {
        "name": "Denisa Lera",
        "role": "Contributor",
        "bio": "Lera Denisa is an Assistant Manager at Genezio, where she plays a key role in ensuring smooth operations and organizational efficiency. With experience in accounting, event coordination, and social media management, she combines analytical precision with creative communication. Her role extends to creating engaging LinkedIn and X content, as well as supporting the company’s brand presence through strategic initiatives. Soon to take on graphic design, Denisa is expanding her skill set to bring a more visual and innovative approach to Genezio’s projects. Known for her adaptability, attention to detail, and forward-thinking mindset, she contributes to both day-to-day management and long-term growth",
        "image": "/authors/denisa-lera.webp",
        "location": "Remote",
        "social": {
            "linkedin": "https://www.linkedin.com/in/denisa-lera/",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "horatiu-voicu": {
        "name": "Horatiu Voicu",
        "role": "Contributor",
        "bio": "Horatiu Voicu is a seasoned Digital Marketing Consultant with over a decade of experience in SEO, PPC, and online strategy. Founder of Voiqu, he has been part of the Google Partners program since 2015, offering expertise in search engine optimization, campaign management, and analytics. Horatiu has worked with prominent organizations, including ANSWEAR.com and MTH Digital, optimizing paid search campaigns, managing large-scale budgets, and increasing ROI. Horatiu’s skill set extends to technical SEO, advanced website audits, and international marketing. With a strong foundation in digital tools like Google Analytics and HubSpot, he has also supported non-profits like WWF Romania by enhancing data tracking and ad grant utilization. Known for his critical thinking and passion for innovation, Horatiu continues to help businesses grow through strategic planning and measurable outcomes.",
        "image": "/authors/horatiu-voicu.webp",
        "location": "Remote",
        "social": {
            "linkedin": "https://www.linkedin.com/in/horatiu-voicu/",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "kristopher-sandoval": {
        "name": "Kristopher Sandoval",
        "role": "Contributor",
        "bio": "Kristopher Sandoval is a seasoned marketing professional with over a decade of experience crafting impactful campaigns and leading teams across companies like Amazon, Fandom, and thatgamecompany. At DeployApps, he combines his expertise in brand strategy and content creation to drive meaningful engagement with the developer community. Kristopher is also a prolific author and thought leader, contributing to Nordic APIs with over 300 articles and whitepapers on topics like API design, product lifecycle management, and developer advocacy. Whether organizing events like SkyFest or launching product-led growth strategies, Kristopher brings creativity and passion to everything he does, always striving to make technology approachable and exciting.",
        "image": "/authors/kristopher-sandoval.webp",
        "location": "Remote",
        "social": {
            "linkedin": "https://www.linkedin.com/in/kristopher-sandoval-95a703b6/",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "luis-minvielle": {
        "name": "Luis Minvielle",
        "role": "Contributor",
        "bio": "Luis Minvielle is a writer with over 5 years of experience in the software sector. Even though he mainly worked in tech, a sector he regularly publishes about, his initial incursions into writing were, oddly enough, music essays—most likely to deal with his unrealized ambitions of becoming a songwriter. And, yes—Luis strongly disagrees with every generic LinkedIn post that claims that reading a — character is a confirmation of AI-written text.",
        "image": "/authors/luis-minvielle.webp",
        "location": "Remote",
        "social": {
            "linkedin": "https://www.linkedin.com/in/luisminv/",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "paul-cionca": {
        "name": "Paula Cionca",
        "role": "Contributor",
        "bio": "Paula Cionca (Avasiloaie) is the Co-Founder of DeployApps, where she combines her expertise in product management and business analysis to create innovative tools for developers. With over five years of experience in the software industry, Paula has a proven track record of transforming ideas into high-quality products through her deep understanding of agile methodologies and the product development lifecycle.",
        "image": "/authors/paula-cionca.webp",
        "location": "Remote",
        "social": {
            "linkedin": "",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "radu-dumitrescu": {
        "name": "Radu Dumitrescu",
        "role": "Contributor",
        "bio": "Radu-Andrei Dumitrescu leads as a Technical Product Owner and Developer. With a passion for simplifying complex development workflows, Radu has played a pivotal role in building DeployApps’s innovative platform, empowering developers to focus on coding while minimizing deployment headaches. A graduate of University POLITEHNICA of Bucharest, Radu’s expertise spans software engineering, big data, and entrepreneurship. Before joining DeployApps, he co-founded and exited CodeTruck.io and held leadership roles in the Big Data Division at Technology Reply, showcasing his ability to deliver results across diverse technical landscapes. Radu is deeply committed to fostering innovation and sharing knowledge through workshops, tutorials, and community engagement, continually pushing the boundaries of what’s possible in technology.",
        "image": "/authors/radu-dumitrescu.webp",
        "location": "Remote",
        "social": {
            "linkedin": "",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "rares-istoc": {
        "name": "Rares Istoc",
        "role": "Contributor",
        "bio": "Rares Istoc is a Senior Software Engineer and Solution Architect with over 7 years of experience in designing and implementing complex software solutions. As the CTO and Co-Founder of Cube Digital, he has played a key role in delivering innovative and scalable products across various industries, including e-commerce, MedTech, and SaaS platforms. With a deep understanding of technologies such as Python, Golang, and TypeScript, Rares specializes in building end-to-end solutions and crafting efficient architectures tailored to unique business needs. Passionate about solving real-world problems, Rares combines technical expertise with a hands-on approach to product development. He is committed to continuous learning, currently exploring Rust and MLOps, and is dedicated to sharing knowledge within the tech community. His work consistently reflects his drive for excellence and his ability to adapt and deliver impactful solutions.",
        "image": "/authors/rares-istoc.webp",
        "location": "Remote",
        "social": {
            "linkedin": "https://www.linkedin.com/in/rares-istoc-9aa401123/",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "stefan-iordache": {
        "name": "Stefan Iordache",
        "role": "Contributor",
        "bio": "Ștefan is a Software Developer at DeployApps, contributing to the platform’s innovative solutions for simplifying app development and deployment. With a strong foundation in Go and TypeScript, Ștefan is passionate about creating efficient, scalable systems that empower developers worldwide. A University POLITEHNICA of Bucharest graduate, Ștefan has demonstrated technical excellence through his academic achievements, including participation in the National Informatics Olympiad, and practical experience as a Co-Founder at CodeTruck.io. His dedication to continuous improvement extends to his involvement in student organizations, where he supported IT initiatives. With a focus on clean code and developer-first solutions, Ștefan plays an integral role in driving DeployApps’s mission to redefine the development experience.",
        "image": "/authors/stefan-iordache.webp",
        "location": "Remote",
        "social": {
            "linkedin": "https://www.linkedin.com/in/stefan-d-iordache/",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "tudor-anghelescu": {
        "name": "Tudor Anghelescu",
        "role": "Contributor",
        "bio": "Anghelescu Tudor is a Frontend Developer at DeployApps, specializing in crafting responsive, user-friendly interfaces that empower developers to seamlessly deploy applications. With a solid foundation in React.js, Redux, and Styled Components, Tudor excels in building scalable, intuitive web applications. Tudor brings over four years of professional experience working with innovative teams, including roles at leekz and Sportya, where he honed his skills in front-end development and software design. Passionate about technology and collaboration, Tudor is driven to stay ahead of industry trends, continuously refining his skills to create cutting-edge digital experiences.",
        "image": "/authors/tudor-anghelescu.webp",
        "location": "Remote",
        "social": {
            "linkedin": "https://www.linkedin.com/in/anghelescu-tudor-b73739193/",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    },
    "virgil-turcu": {
        "name": "Virgil Turcu",
        "role": "Contributor",
        "bio": "Virgil Turcu is a Developer at DeployApps, contributing to the enhancement and development of user-friendly web applications. Specializing in React.js, Redux.js, and Front-End Development, Virgil is passionate about creating seamless digital experiences. A recent graduate from the University of Bucharest, where he focused on Web Development, Virgil brings a strong foundation in CSS, JavaScript, and modern front-end frameworks. He has been actively involved in streamlining deployment processes, including integrating GitHub repositories directly into development workflows. Dedicated to continuous learning and innovation, Virgil thrives in collaborative environments and is driven to contribute to cutting-edge technological solutions.",
        "image": "/authors/virgil-turcu.webp",
        "location": "Remote",
        "social": {
            "linkedin": "https://www.linkedin.com/in/virgil-turcu-797172255/",
            "twitter": "https://twitter.com",
            "email": "contact@genezio.com"
        },
        "stats": {
            "articles": 0,
            "readers": "5K",
            "expertise": [
                "Cloud",
                "Serverless",
                "DevOps"
            ]
        }
    }
};

function BlogAuthor() {
    const { name } = useParams<{ name: string }>();
    // Default to luis-minvielle if name matches or just use the parameter
    const slug = name || "luis-minvielle";
    const author = authors[slug];

    if (!author) {
        return (
            <div className="min-h-screen bg-[#050506] flex items-center justify-center px-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">
                        Author Not Found
                    </h1>
                    <p className="text-white/60 mb-8">
                        The author you're looking for doesn't exist.
                    </p>
                    <Link to="/blog">
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500">
                            Back to Blog
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    const allBlogPosts = getAllPosts();
    // Filter posts where the author name matches the author's name
    const authorPosts = allBlogPosts.filter((post) => post.author === author.name);

    // Update stats dynamically
    author.stats.articles = authorPosts.length;

    return (
        <div className="min-h-screen bg-[#050506]">
            {/* Back Button */}
            <div className="px-6 pt-8">
                <div className="max-w-7xl mx-auto">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                    >
                        <ArrowLeftIcon className="w-4 h-4" />
                        Back to Blog
                    </Link>
                </div>
            </div>

            {/* Author Hero Section */}
            <section className="relative pt-16 pb-20 px-6 overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-purple-600/5 to-transparent" />

                <div className="relative max-w-5xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {/* Author Image */}
                        <div className="flex-shrink-0">
                            <img
                                src={author.image}
                                alt={author.name}
                                className="w-35 h-40 rounded-2xl border-2 border-white/20 object-fit-contain"
                            />
                        </div>

                        {/* Author Info */}
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                                {author.name}
                            </h1>
                            <p className="text-xl text-blue-400 mb-4">{author.role}</p>
                            <p className="text-lg text-white/60 mb-6 leading-relaxed max-w-3xl">
                                {author.bio}
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-6 mb-6">
                                <div>
                                    <div className="text-2xl font-bold text-white">
                                        {author.stats.articles}
                                    </div>
                                    <div className="text-sm text-white/40">Articles</div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-3">
                                <a
                                    href={author.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-all"
                                >
                                    <LinkedinIcon className="w-5 h-5 text-white/60" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Author's Articles */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-white mb-8">
                        Articles by {author.name}
                    </h2>

                    {authorPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {authorPosts.map((post) => {
                                const Icon = post.icon;
                                return (
                                    <Link
                                        key={post.id}
                                        to={`/blog/${post.id}`}
                                        className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all overflow-hidden"
                                    >
                                        {/* Gradient overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                                        <div className="relative">
                                            {/* Icon */}
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${post.gradient} opacity-20 flex items-center justify-center mb-4`}>
                                                <Icon className="w-6 h-6 text-white" />
                                            </div>

                                            {/* Category & Read Time */}
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="text-xs font-medium text-blue-400">
                                                    {post.category}
                                                </span>
                                                <span className="text-xs text-white/40">•</span>
                                                <div className="flex items-center gap-1 text-xs text-white/40">
                                                    <ClockIcon className="w-3 h-3" />
                                                    {post.readTime}
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                                {post.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-sm text-white/60 mb-4 leading-relaxed line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            {/* Date */}
                                            <div className="flex items-center gap-1.5 pt-4 border-t border-white/10 text-xs text-white/40">
                                                <CalendarIcon className="w-3 h-3" />
                                                {post.date}
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-white/60">No articles yet.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}

export default BlogAuthor;