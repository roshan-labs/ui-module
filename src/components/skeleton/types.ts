export interface SkeletonTitle {
  width: number | string
}

export interface SkeletonParagraph {
  rows: number
  width: number | string | Array<number | string>
}

export interface SkeletonAvatar {
  active: boolean
  shape: 'circle' | 'square'
  size: number | 'small' | 'default' | 'large'
}
