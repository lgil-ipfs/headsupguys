const courseContent = [
    {
        id: "intro",
        title: "Financial Literacy for Mental Wellness",
        subtitle: "A Course on Money, Stress, and Taking Back Control",
        intro: true,
        content: `
            <div class="info-box clinical">
                <h4>Course Overview & Intent</h4>
                <p>This course was built with one core belief: financial stress is not a character flaw. It is a human experience — one that quietly shapes our moods, our relationships, our self-worth, and our mental health every single day.</p>
                <p>Designed in partnership with <strong>HeadsUpGuys</strong>, this program meets men where they are. It does not start with spreadsheets. It starts with stories, feelings, and honest conversations about what money really means to us.</p>
            </div>
            <p>By the end of this course, participants will have a clearer sense of their relationship with money, understand where their stress comes from, and have a practical, shame-free starting point for building financial wellness — with the support of qualified professionals.</p>
            <div class="info-box review">
                <h4>🔒 A Note on Sharing</h4>
                <p>Everything shared in this course is confidential to the group. Participation assignments ask for your honest experience — there are no right or wrong answers, only yours. You will be graded on participation, not perfection.</p>
            </div>
            <div class="info-box clinical">
                <h4>👨‍⚕️ Psychiatrist Review Notes</h4>
                <p>This course intentionally integrates psychoeducation around financial stress, shame, avoidance behaviours, and masculine norms around money. Assignments are designed to reduce shame and increase self-awareness rather than drive compliance.</p>
            </div>
        `
    },
    {
        id: "chapter1",
        chapterNumber: 1,
        title: "What Does Money Mean to You?",
        subtitle: "Understanding the emotional foundations of your financial life",
        content: `
            <h2>Money is More Than Math</h2>
            <p>Before we talk about budgets, accounts, or financial plans, we need to start with something deeper: what does money actually mean to you? Not the textbook answer — the real one, the one that lives in your gut when a bill arrives, or when you see a friend's lifestyle on social media.</p>
            <p>Money is never just money. It is safety, freedom, status, love, fear, control, and identity all at once. Understanding your personal relationship with money is the first and most important step in this entire course.</p>
            
            <p>Most of us were taught to think about money as numbers: income minus expenses equals savings. But that view misses almost everything important. Long before we ever balanced a budget, we were watching how the adults around us talked about money, fought about money, avoided money, or used money to express love — and we were absorbing those lessons deep into our nervous systems.</p>

            <p>Psychologists call these early learnings "money scripts" — unconscious beliefs that quietly drive our financial behaviour as adults.</p>
            <ul>
                <li>Money scripts are inherited, not innate — they can be rewritten.</li>
                <li>Many money fears trace back to childhood experiences with scarcity, conflict, or shame.</li>
                <li>Understanding your money story is the foundation of financial wellness.</li>
            </ul>

            <div class="info-box clinical">
                <h4>[Review Requested — Clinical]</h4>
                <p>This section introduces the concept of money scripts. Consider whether additional psychoeducation on how beliefs are formed in childhood would strengthen this section.</p>
            </div>

            <h2>The Language of Money in Your Life</h2>
            <p>The way we talk about money reveals a lot. Phrases like "I can't afford it" versus "That's not a priority right now" reflect very different mindsets. Language shapes how we feel about our financial situation — and how we feel shapes what we do.</p>
            <p>Men, in particular, often face a cultural pressure to appear financially capable regardless of reality. Admitting financial struggle can feel like admitting failure as a provider, a partner, or a person. This silence is one of the most dangerous aspects of financial stress — because problems that don't get named don't get solved.</p>
            <ul>
                <li>Shame keeps financial problems invisible and unaddressed.</li>
                <li>Naming a money fear out loud reduces its power.</li>
                <li>Asking for help with money is a strength, not a weakness.</li>
            </ul>
        `,
        assignments: [
            {
                id: "1a",
                title: "Assignment 1A — Your First Money Memory",
                questions: [
                    "What is your earliest memory involving money?",
                    "How did that memory make you feel at the time?",
                    "Do you think that experience still affects how you feel about money today? In what way?"
                ],
                type: "text",
                tag: "Mark for Participation"
            },
            {
                id: "1b",
                title: "Assignment 1B — What Does Money Mean to You?",
                questions: [
                    "List 5 things money means to you (e.g., safety, freedom, stress, love, status, fear, power...).",
                    "Which one surprised you? Why do you think that is?",
                    "Is there a money belief you carry that you think might be holding you back?"
                ],
                type: "text",
                tag: "Mark for Participation"
            }
        ]
    },
    {
        id: "chapter2",
        chapterNumber: 2,
        title: "Where Does Financial Stress Come From?",
        subtitle: "Mapping the roots of money anxiety",
        content: `
            <h2>The Big Sources of Financial Stress</h2>
            <p>Financial stress is one of the most common — and most under-discussed — contributors to poor mental health in men. Research consistently shows the following as primary drivers:</p>
            <ul>
                <li><strong>Debt</strong> — especially consumer debt, where interest makes progress feel impossible.</li>
                <li><strong>Income instability</strong> — irregular work, self-employment, or seasonal employment.</li>
                <li><strong>Life transitions</strong> — divorce, job loss, a new baby, or medical diagnosis.</li>
                <li><strong>Social comparison</strong> — watching peers appear more successful on social media.</li>
                <li><strong>Responsibility overload</strong> — being the sole or primary financial provider for a family.</li>
            </ul>

            <div class="info-box clinical">
                <h4>Did You Know?</h4>
                <p>A 2023 FP Canada survey found that 44% of Canadians report money as their #1 source of stress. Among men, financial concerns are one of the most common triggers for depression and anxiety, yet one of the least discussed.</p>
            </div>

            <h2>The Invisible Stressors</h2>
            <p>Some financial stressors are obvious — an overdue bill, a maxed credit card. But many are invisible, operating below the surface:</p>
            <ul>
                <li>The gap between who you are and who you think you should be, financially.</li>
                <li>Carrying the financial mistakes or patterns of your parents.</li>
                <li>The cognitive load of constantly calculating what you can afford.</li>
                <li>Financial grief — mourning the life or future you thought you would have.</li>
            </ul>

            <h2>The Masculinity Trap</h2>
            <p>Many men have internalized a belief that they should be financial providers, protectors, and problem-solvers — and that failure in any of these roles reflects on their worth as men.</p>
            <p>This "financial masculinity trap" means that financial struggles are experienced not just as practical problems, but as existential threats to identity. This is why men are statistically less likely to seek financial advice.</p>

            <div class="info-box clinical">
                <h4>[Review Requested — Clinical]</h4>
                <p>Section 2.3 addresses masculine norms and financial identity. Clinical input on framing would be valuable here to ensure it feels affirming rather than accusatory.</p>
            </div>
        `,
        assignments: [
            {
                id: "2a",
                title: "Assignment 2A — Your Financial Stress Map",
                questions: [
                    "List your top 3–5 financial stressors right now.",
                    "For each one: is the stress mostly practical (I need to solve something) or emotional (this affects how I feel about myself)?",
                    "Is there one stressor you've never told anyone about? (You don't have to share what it is, just acknowledge it)."
                ],
                type: "text",
                tag: "Mark for Participation"
            },
            {
                id: "2b",
                title: "Assignment 2B — Where Did This Come From?",
                questions: [
                    "What is the financial stressor you chose?",
                    "Where do you think this stress originally came from (childhood, culture, past mistake)?",
                    "Does understanding the origin change how you feel about it at all?"
                ],
                type: "text",
                tag: "Mark for Participation"
            }
        ]
    },
    {
        id: "chapter3",
        chapterNumber: 3,
        title: "How Financial Stress Affects Your Life",
        subtitle: "The hidden toll of money anxiety on mind, body, and relationships",
        content: `
            <h2>The Mental Health Connection</h2>
            <p>The relationship between financial stress and mental health is profound. Chronic financial stress is one of the strongest predictors of depression and anxiety in men.</p>
            <ul>
                <li>Constant worry consumes cognitive resources.</li>
                <li>Financial shame activates the same neural pathways as physical pain.</li>
                <li>Helplessness mirrors the cognitive patterns of depression.</li>
                <li>Sleep deprivation impairs decision-making and emotional regulation.</li>
            </ul>

            <div class="info-box warning">
                <h4>Important — Please Read</h4>
                <p>If you are currently experiencing symptoms of depression, anxiety, or thoughts of self-harm, please reach out to a mental health professional. <a href="https://headsupguys.org" target="_blank">HeadsUpGuys (headsupguys.org)</a> has resources specifically designed for men.</p>
            </div>

            <h2>The Physical Toll</h2>
            <p>Research links chronic financial stress to several physical health consequences: elevated cortisol, cardiovascular disease risk, disrupted sleep, and increase in substance use as a coping mechanism.</p>

            <h2>Relationships and Isolation</h2>
            <p>Financial stress is a leading cause of relationship breakdown. It leads to conflict with partners, withdrawal from social activities due to embarrassment, and emotional unavailability.</p>

            <h2>The Avoidance Spiral</h2>
            <p>One of the most common responses to overwhelming financial stress is avoidance: not opening bank statements, ignoring calls from creditors, or putting off conversations. Avoidance provides short-term relief but long-term harm.</p>

            <div class="info-box clinical">
                <h4>On Doing It Alone</h4>
                <p>Delegation is not defeat. Working with a financial advisor, accountant, or planner is one of the single most effective things you can do for both your financial and mental health. You would not set your own broken bone; you should not have to restructure your financial life alone either.</p>
            </div>
        `,
        assignments: [
            {
                id: "3a",
                title: "Assignment 3A — How Does Money Stress Show Up For You?",
                questions: [
                    "Describe a recent experience of financial stress. What was happening?",
                    "How did it show up physically? (sleep, tension, energy, etc.)",
                    "How did it affect your mood and your relationships?",
                    "Did you talk to anyone about it? Why or why not?"
                ],
                type: "text",
                tag: "Mark for Participation"
            },
            {
                id: "3b",
                title: "Assignment 3B — Your Avoidance Patterns",
                questions: [
                    "Is there a financial task or reality you have been avoiding? What is it?",
                    "How long have you been avoiding it?",
                    "What do you think you're protecting yourself from by avoiding it?",
                    "What do you think might happen if you faced it — with support?"
                ],
                type: "text",
                tag: "Mark for Participation"
            }
        ]
    },
    {
        id: "chapter4",
        chapterNumber: 4,
        title: "Rebuilding Your Relationship With Money",
        subtitle: "From shame and avoidance to clarity and agency",
        content: `
            <h2>From Shame to Curiosity</h2>
            <p>Shame is the most corrosive emotion in personal finance. The antidote is not pride, but curiosity. Curiosity says: "I wonder why I do that?" instead of "What's wrong with me?"</p>
            <ul>
                <li>Shame is backward-facing and paralyzing. Curiosity is forward-facing and activating.</li>
                <li>Your current financial situation is not who you are — it is where you are.</li>
            </ul>

            <h2>Values-Based Financial Thinking</h2>
            <p>Lasting financial change happens when your money starts reflecting what actually matters to you. Values-based thinking starts with: <em>"What do I want my money to do for my life?"</em></p>
            
            <div class="info-box clinical">
                <h4>A Helpful Reframe</h4>
                <p>Instead of asking "What should I be doing with my money?" — try asking "What does a life well-lived look like for me, and how can my money support that?"</p>
            </div>

            <h2>Permission to Start Where You Are</h2>
            <p>The best time to begin building a healthy relationship with money is exactly where you are right now. Not because the situation is ideal, but because starting — even imperfectly — is the only way forward.</p>
        `,
        assignments: [
            {
                id: "4a",
                title: "Assignment 4A — Your Financial Values",
                questions: [
                    "What are your top 5 personal values right now?",
                    "Where did most of your money go last month?",
                    "Is there alignment or disconnection between the two? How does that feel?",
                    "What is one small change you could make to better align your spending with your values?"
                ],
                type: "text",
                tag: "Mark for Participation"
            },
            {
                id: "4b",
                title: "Assignment 4B — A Letter to Your Future Financial Self",
                questions: [
                    "What do you hope your financial life looks like in 10 years?",
                    "What emotion came up for you while writing it?",
                    "What is one step — however small — you could take this week toward that vision?"
                ],
                type: "text",
                tag: "Mark for Participation"
            }
        ]
    },
    {
        id: "chapter5",
        chapterNumber: 5,
        title: "Community, Connection, and Asking for Help",
        subtitle: "Why financial wellness is not a solo sport",
        content: `
            <h2>The Cost of Going It Alone</h2>
            <p>Men who try to manage financial stress in isolation face compounding risks: lack of social support is a strong risk factor for depression, and isolation prevents the "reality testing" that helps distinguish catastrophic thinking from actual circumstances.</p>

            <div class="info-box warning">
                <h4>The Isolation Warning</h4>
                <p>Unaddressed financial stress, compounded by social isolation, is a significant risk factor for depression and substance use. If you are struggling, please reach out to its HeadsUpGuys network. You are not alone.</p>
            </div>

            <h2>What Healthy Financial Support Looks Like</h2>
            <ul>
                <li>A trusted friend or partner who you can talk honestly about money with.</li>
                <li>A peer community where experiences are normalized.</li>
                <li>A financial advisor who understands your full picture.</li>
                <li>An accountant or mental health professional.</li>
            </ul>
            <p>A financial advisor handles the plan; a therapist handles the emotional patterns. Both matter.</p>

            <h2>Men and Vulnerability Around Money</h2>
            <p>For many men, admitting financial difficulty feels like the deepest kind of vulnerability. The men who make the most progress are the ones who can say: <em>"I don't know what I'm doing here and I need help."</em></p>
        `,
        assignments: [
            {
                id: "5a",
                title: "Assignment 5A — Your Support Network",
                questions: [
                    "Who in your life can you talk honestly about money with?",
                    "Do you currently work with any financial professionals? If not, what has stopped you?",
                    "What is one step you could take this week to build your financial support network?"
                ],
                type: "text",
                tag: "Mark for Participation"
            },
            {
                id: "5b",
                title: "Assignment 5B — The Vulnerability Challenge",
                questions: [
                    "What have you been carrying financially that you've never shared?",
                    "How has keeping that secret affected you?",
                    "How does it feel to name it here, in this safe space?"
                ],
                type: "text",
                tag: "Mark for Participation"
            }
        ]
    },
    {
        id: "chapter6",
        chapterNumber: 6,
        title: "Your Financial Foundations",
        subtitle: "A simple, shame-free introduction to building financial wellness — with professionals by your side",
        content: `
            <div class="info-box clinical">
                <h4>💼 The Most Important Thing</h4>
                <p>Trying to build a financial plan entirely by yourself is one of the most common reasons people feel overwhelmed. Working with a qualified financial advisor, accountant, and/or lawyer is the most efficient and emotionally sustainable path to financial wellness.</p>
            </div>

            <h2>Pillar One: Managing Cash Flow</h2>
            <p>Cash flow is the foundation — what comes in versus what goes out. Track your spending for 30 days to see reality clearly. The goal of a budget is not restriction, but clarity.</p>

            <h2>Pillar Two: Managing and Eliminating Debt</h2>
            <p>Debt is one of the primary sources of stress. Prioritize high-interest consumer debt. Paying off debt produces a measurable reduction in anxiety and depressive symptoms.</p>

            <h2>Pillar Three: Protecting What You Have</h2>
            <p>Three types of coverage are critical for men: Life Insurance, Disability Insurance, and Critical Illness Insurance. Knowing your family is protected changes how you sleep at night.</p>

            <h2>Pillar Four: Building Assets</h2>
            <p>Key Canadian Accounts: TFSA (Tax-Free Savings Account), RRSP (Registered Retirement Savings Plan), FHSA (First Home Savings Account), and RESP. These are tax-sheltered containers for your investments.</p>

            <h2>Pillar Five: Estate, Legacy, and Giving Back</h2>
            <p>Estate planning (Wills, Power of Attorney) ensures your loved ones are protected. Legacy is about the values you transmit and the community impact you have.</p>

            <h2>Finding and Trusting a Financial Professional</h2>
            <p>Look for credentials/licensing, a fiduciary standard, transparency on compensation, and personal fit. Red flags: guarantees of returns or pressure to act quickly.</p>
        `,
        assignments: [
            {
                id: "6a",
                title: "Assignment 6A — Your Financial Foundation Audit",
                questions: [
                    "Which pillar (Cash Flow, Debt, Protection, Assets, Estate) feels most urgent for you to address?",
                    "What is one action you will take in the next 30 days?"
                ],
                type: "text",
                tag: "Mark for Participation"
            },
            {
                id: "6b",
                title: "Assignment 6B — Finding Your Professional",
                questions: [
                    "What has stopped you from working with a financial professional, if you haven't?",
                    "Commit to one action: verify an advisor's credentials? Book a discovery call? Ask for a referral? What will you do and by when?"
                ],
                type: "text",
                tag: "Mark for Participation"
            }
        ]
    },
    {
        id: "closing",
        title: "Closing: You Made It",
        subtitle: "Six chapters of honest conversation",
        content: `
            <p>You came into this course carrying some version of financial stress, confusion, or fear. You leave it with something more valuable: a clearer understanding of your own story and the language to talk about what has been hard.</p>
            <p>Financial wellness is not a destination. It is a practice — and like all practices, it requires patience, support, and self-compassion. There will be setbacks. That is not failure. That is human.</p>
            <div class="info-box clinical">
                <h4>Final Reminder</h4>
                <p>Please reach out to a financial professional to begin building your personalized plan. You are worth the investment — in every sense of the word.</p>
            </div>
            <div style="text-align: center; margin-top: 3rem;">
                <p><strong>HeadsUpGuys × Iberian Pacific Financial Services</strong></p>
                <p><a href="https://headsupguys.org">headsupguys.org</a> | <a href="https://ibericapacific.ca">ibericapacific.ca</a></p>
            </div>
        `,
        isClosing: true
    }
];
