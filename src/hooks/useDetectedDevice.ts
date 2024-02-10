import { useState, useEffect } from 'react'

const getWindowDimensions = (breakpoint: number) => {
  return typeof window !== 'undefined' ? window.innerWidth <= breakpoint : true
}

const useDetectedDevice = () => {
  const [isDesktopState, setIsDesktop] = useState<boolean>(false)
  const [isTabletLargeState, setIsTabletLarge] = useState<boolean>(false)
  const [isTabletState, setIsTablet] = useState<boolean>(false)
  const [isTabletSmallState, setIsTabletSmall] = useState<boolean>(false)
  const [isMobileState, setIsMobile] = useState<boolean>(false)
  const [isMobileSmall, setIsMobileSmall] = useState<boolean>(false)
  const [isMobileXSmall, setIsMobileXSmall] = useState<boolean>(false)

  const devices = {
    isDesktop: isDesktopState,
    isTabletLarge: isTabletLargeState,
    isTablet: isTabletState,
    isTabletSmall: isTabletSmallState,
    isMobile: isMobileState,
    isMobileSmall,
    isMobileXSmall,
  }

  const handleResize = () => {
    setIsDesktop(getWindowDimensions(1440))
    setIsTabletLarge(getWindowDimensions(1279))
    setIsTablet(getWindowDimensions(1023))
    setIsTabletSmall(getWindowDimensions(767))
    setIsMobile(getWindowDimensions(567))
    setIsMobileSmall(getWindowDimensions(359))
    setIsMobileXSmall(getWindowDimensions(320))
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return devices
}

export default useDetectedDevice
