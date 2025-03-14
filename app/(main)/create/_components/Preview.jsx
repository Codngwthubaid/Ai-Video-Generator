import Image from "next/image"
import { videoOptions} from "@/constants/index"
import { cn } from "@/lib/utils"
export default function Preview({ formData }) {

    const videoPreviewImage = formData && videoOptions.find((item) => item?.Name == formData?.VideoStyle)
    console.log(videoPreviewImage)

    return formData?.VideoStyle && (
        <div className="border rounded-lg relative">
            <h2 className="font-semibold text-3xl absolute right-0">Preview</h2>
            <Image src={videoPreviewImage?.Image} alt={videoPreviewImage?.Name} width={1000} height={100} className="w-full h-[75vh] object-cover rounded-md" />
            <h2 className={cn(formData?.videoCaption?.Style, "absolute bottom-20 text-center w-full")}>{formData?.videoCaption?.Name}</h2>
        </div>
    )
}