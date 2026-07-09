// keystatic.config.tsx
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
    storage: {
        kind: process.env.NODE_ENV === 'development' ? 'local' : 'github',
        repo: {
            owner: 'mhdirfan07', // Ganti dengan username GitHub Anda (misal: irfn)
            name: 'Irfan.dev',  // Ganti dengan nama repositori GitHub proyek ini
        },
    },
    collections: {
        projects: collection({
            label: 'Projects',
            slugField: 'title',
            path: 'src/content/projects/*/',
            format: { data: 'json' },
            schema: {
                title: fields.slug({ name: { label: 'Title' } }),
                description: fields.text({ label: 'Description', multiline: true }),
                coverImage: fields.image({
                    label: 'Project Preview / Cover Image',
                    directory: 'public/images/projects',
                    publicPath: '/images/projects/',
                }),
                content: fields.document({
                    label: 'Content',
                    formatting: true,
                    dividers: true,
                    links: true,
                }),
                link: fields.url({ label: 'Project Link' }),
                repoUrl: fields.url({ label: 'Repository URL' }),
                category: fields.select({
                    label: 'Category',
                    options: [
                        { label: 'Web Development', value: 'WEB' },
                        { label: 'Mobile App', value: 'MOBILE' },
                        { label: 'Cloud / DevOps', value: 'CLOUD' },
                    ],
                    defaultValue: 'WEB',
                }),
                techStack: fields.array(fields.text({ label: 'Tech' }), { label: 'Tech Stack', itemLabel: props => props.value }),
            },
        }),
        experience: collection({
            label: 'Work Experience',
            slugField: 'company',
            path: 'src/content/experience/*/',
            format: { data: 'json' },
            schema: {
                company: fields.slug({ name: { label: 'Company Name' } }),
                period: fields.text({ label: 'Period (e.g. 2024 - PRESENT)' }),
                subtitle: fields.text({ label: 'Subtitle / Additional Company Info' }),
                title: fields.text({ label: 'Job Title' }),
                current: fields.checkbox({ label: 'Is Current Job?' }),
                tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags / Tech Stack', itemLabel: props => props.value }),
                logs: fields.array(fields.text({ label: 'Log Entry' }), { label: 'Performance Logs', itemLabel: props => props.value }),
            }
        })
    },

    singletons: {
        homepage: singleton({
            label: 'Homepage Settings',
            path: 'src/content/homepage',
            format: { data: 'json' },
            schema: {
                heroTitleLeft: fields.text({ label: 'Hero Text Kiri', defaultValue: 'PORT' }),
                heroTitleRight: fields.text({ label: 'Hero Text Kanan', defaultValue: 'FOLIO' }),
            },
        }),
        about: singleton({
            label: 'About Section',
            path: 'src/content/about',
            format: { data: 'json' },
            schema: {
                entity: fields.text({ label: 'Entity Label', defaultValue: 'ENTITY: IRFN' }),
                status: fields.text({ label: 'Status Label', defaultValue: 'STATUS: AVAILABLE_FOR_HIRE' }),
                name: fields.text({ label: 'Name (use \\n for line breaks)', multiline: true, defaultValue: 'MUHAMMAD\nIRFAN' }),
                role: fields.text({ label: 'Role / Title', defaultValue: '> SOFTWARE_ENGINEER / FULL_STACK_DEVELOPER' }),
                description: fields.text({ label: 'Bio Description', multiline: true }),
                profileImage: fields.image({
                    label: 'Profile Image',
                    directory: 'public/images',
                    publicPath: '/images/',
                }),
                specializations: fields.array(
                    fields.object({
                        label: fields.text({ label: 'Label' }),
                        icon: fields.text({ label: 'Icon Name (lucide-react, e.g. Globe, Cloud)' }),
                    }),
                    { label: 'Specializations', itemLabel: props => props.fields.label.value }
                ),
                stats: fields.array(
                    fields.object({
                        label: fields.text({ label: 'Stat Label' }),
                        value: fields.text({ label: 'Stat Value' }),
                    }),
                    { label: 'Stats', itemLabel: props => props.fields.label.value }
                ),
                skills: fields.array(
                    fields.object({
                        name: fields.text({ label: 'Skill Name' }),
                        icon: fields.text({ label: 'Icon Name (lucide-react, e.g. Cpu, Atom)' }),
                    }),
                    { label: 'Skills Matrix', itemLabel: props => props.fields.name.value }
                ),
            }
        }),
        validationLogs: singleton({
            label: 'Validation Logs',
            path: 'src/content/validationLogs',
            format: { data: 'json' },
            schema: {
                logs: fields.array(
                    fields.object({
                        date: fields.text({ label: 'Date (e.g. 2024)' }),
                        name: fields.text({ label: 'Name' }),
                        quote: fields.text({ label: 'Quote / Description' }),
                        icon: fields.text({ label: 'Icon Name (lucide-react, e.g. Cloud, Wrench)' }),
                    }),
                    { label: 'Validation Entries', itemLabel: props => props.fields.name.value }
                ),
            }
        }),
        ctaBlock: singleton({
            label: 'Contact CTA',
            path: 'src/content/ctaBlock',
            format: { data: 'json' },
            schema: {
                heading: fields.text({ label: 'Heading', defaultValue: 'INITIATE_CONTACT' }),
                email: fields.text({ label: 'Email Address' }),
                buttonText: fields.text({ label: 'Button Text', defaultValue: 'SEND_TRANSMISSION' }),
            }
        }),
        footer: singleton({
            label: 'Footer',
            path: 'src/content/footer',
            format: { data: 'json' },
            schema: {
                leftText: fields.text({ label: 'Left Text', defaultValue: 'SYNDICATE_2024' }),
                centerText: fields.text({ label: 'Center Text', defaultValue: 'ALL_SYSTEMS_NOMINAL' }),
                socialLinks: fields.array(
                    fields.object({
                        label: fields.text({ label: 'Platform Name' }),
                        url: fields.url({ label: 'URL' }),
                    }),
                    { label: 'Social Links', itemLabel: props => props.fields.label.value }
                ),
            }
        })
    },
});