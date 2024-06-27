import { useTranslation } from 'react-i18next'
import Section from '../../ui/Section'
import SectionHeading from '../../ui/SectionHeading'

function ProjectsSection() {
    const { t } = useTranslation()
    return (
        <Section>
            <SectionHeading>{t('projects')}</SectionHeading>
        </Section>
    )
}

export default ProjectsSection
