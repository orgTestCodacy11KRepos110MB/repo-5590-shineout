import { ReactNode, CSSProperties, FC } from "react"
import { StandardProps } from "../@types/common"
import { GetScrollContextConsumerValue } from "../Scroll/Props"

export type ToolPosition =  'top' | 'left' | 'right' | 'bottom' | 'bottom-right' | 'cover'
export type TriggerType = 'click' | 'hover'
export interface ContainerOptions {
  show: (props: ContainerProps, id: string, innerStyle?: CSSProperties) => void
  hide: () => void
  move: (id: string, pos: Pick<CSSProperties, 'left' | 'right' | 'top' | 'bottom'>) => void
  isCurrent: (id: string) => boolean
}
export interface ContainerProps extends StandardProps {
  /**
   * use animation
   *
   * 弹出是否使用动画，默认为 true
   *
   * default: true
   */
  animation?: boolean,
  /**
   * The child element can only be a ReactElement.
   *
   * 子元素只能为一个 ReactElement
   *
   * default: required
   */
  children: ReactNode
  /**
   * The position of the pop-up layer, options: ['left', 'top', 'right', 'bottom']
   *
   * 弹出层位置
   *
   * default: 'top'
   */
  position?: ToolPosition
  /**
   * 内部属性在 scrollContext 中获取
   */
  scrollElement?: HTMLElement
  /**
   * 内部属性在 scrollContext 中获取
   */
  scrollLeft?: number
  /**
   * 内部属性在 scrollContext 中获取
   */
  scrollTop?: number
  /**
   * Pop-up type, one of  ["hover", "click"]
   *
   * 弹出方式
   *
   * default: "hover"
   */
  trigger?: TriggerType
  /**
   * make disabled element work
   *
   * 使被禁用的元素正常显示提示
   *
   * default: false
   */
  disabledChild?: boolean
  /**
   * Pop up texts
   *
   * 弹出文字
   *
   * default: required
   */
  tip: ReactNode
  /**
   * Popup delay
   *
   * 弹出延迟
   *
   * default: 0
   */
  delay?: number
}

export type TooltipProps = GetScrollContextConsumerValue<ContainerProps>

export type TooltipType = FC<TooltipProps>
