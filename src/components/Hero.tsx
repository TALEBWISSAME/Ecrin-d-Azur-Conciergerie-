import { useId, useState } from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

type HeroLink = {
  label: string
  to: string
}

type HeroProps = {
  eyebrow: string
  title: string
  description?: string
  primaryLink?: HeroLink
  secondaryLink?: HeroLink
  imageSrc?: string
  imageWidth?: number
  imageHeight?: number
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryLink,
  secondaryLink,
  imageSrc = '/images/hero-riviera.jpg',
  imageWidth = 2400,
  imageHeight = 1800,
}: HeroProps) {
  const titleId = useId()
  const [failedImage, setFailedImage] = useState<string | null>(null)

  return (
    <section className="hero-riviera" aria-labelledby={titleId}>
      <div className="hero-riviera-media" aria-hidden="true">
        {imageSrc && failedImage !== imageSrc && (
          <img
            src={imageSrc}
            alt=""
            width={imageWidth}
            height={imageHeight}
            fetchPriority="high"
            decoding="async"
            onError={() => setFailedImage(imageSrc)}
          />
        )}
      </div>
      <div className="hero-riviera-inner">
        <div className="hero-riviera-content">
          <p className="hero-riviera-eyebrow hero-riviera-enter">{eyebrow}</p>
          <h1 id={titleId} className="hero-riviera-title hero-riviera-enter">{title}</h1>
          {description && <p className="hero-riviera-description hero-riviera-enter">{description}</p>}
          {(primaryLink || secondaryLink) && <div className="hero-riviera-actions hero-riviera-enter">
            {primaryLink && (
            <Link className="hero-riviera-button hero-riviera-button-primary" to={primaryLink.to}>
              {primaryLink.label}
            </Link>
            )}
            {secondaryLink && (
              <Link className="hero-riviera-button hero-riviera-button-secondary" to={secondaryLink.to}>
                {secondaryLink.label}
              </Link>
            )}
          </div>}
        </div>
      </div>
    </section>
  )
}
