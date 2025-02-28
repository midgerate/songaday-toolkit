import { Box } from '@chakra-ui/react'
import { ReactNode, useRef } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

type FileUploadProps = {
  register: UseFormRegisterReturn
  accept?: string
  multiple?: boolean
  children?: ReactNode
}

export const FileUpload = (props: FileUploadProps) => {
  const { register, accept, multiple, children } = props
  const inputRef = useRef<HTMLInputElement | null>(null)
  const { ref, ...rest } = register as {
    ref: (instance: HTMLInputElement | null) => void
  }

  const handleClick = () => {
    inputRef.current?.click()
  }

  return (
    <Box onClick={handleClick} cursor="pointer">
      <input
        type="file"
        multiple={multiple || false}
        hidden
        accept={accept}
        {...rest}
        ref={(e) => {
          ref(e)
          inputRef.current = e
        }}
      />
      {children}
    </Box>
  )
}
