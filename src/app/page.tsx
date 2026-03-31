import { BenefitsSection } from '@/components/home/BenefitsSection'
import { DefinitionMetrics } from '@/components/home/DefinitionMetrics'
import { FinalCTASection } from '@/components/home/FinalCTASection'
import { HeroSection } from '@/components/home/HeroSection'
import { MemberCatalogPreview } from '@/components/home/MemberCatalogPreview'
import { NewsUnified } from '@/components/home/NewsUnified'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DefinitionMetrics />
      <MemberCatalogPreview />
      <NewsUnified />
      <BenefitsSection />
      <FinalCTASection />
    </>
  )
}
