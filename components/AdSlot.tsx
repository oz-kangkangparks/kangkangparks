"use client"
/**
 * 실제 적용 전:
 * 1) 구글 애드센스 승인
 * 2) <head>에 클라이언트 스크립트 삽입
 * 3) data-ad-client, data-ad-slot 값 교체
 */
export default function AdSlot({ className="" }: { className?:string }){
  return (
    <div className={`w-full flex justify-center ${className}`}>
      <div className="border rounded-xl p-6 text-center w-full bg-white">
        <div className="text-xs text-gray-500">[AD] Google AdSense Slot</div>
        {/* 실제 적용 예시:
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXX"
          data-ad-slot="YYYYYYYYYY"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        */}
      </div>
    </div>
  )
}
