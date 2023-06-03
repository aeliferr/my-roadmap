export type TrailProps = {
  id: string
  description: string
}

export class Trail {
  /**
   *
   */
  constructor(props: TrailProps) {
    this.props = props
  }

  props: TrailProps
}
