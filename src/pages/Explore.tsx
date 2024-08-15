
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

const imageUrls = [
  'https://www.wanderershub.com/wp-content/uploads/2023/09/Cafe-des-Art-Puducherry.jpg',
  'https://images.unsplash.com/photo-1524613032530-449a5d94c285?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://www.wanderershub.com/wp-content/uploads/2023/09/PONDICHERRY-ATTRACTIONS-1536x917.png',
  'https://tripnxt.com/blog/wp-content/uploads/2020/05/paradise-beach-tn.jpg',
  'https://images.unsplash.com/photo-1515091943-9d5c0ad475af?q=80&w=1535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1588623967205-d31b760a32bc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://upload.wikimedia.org/wikipedia/commons/0/0b/A_night_in_the_streets_of_Pondicherry%21.jpg',
  'https://static2.tripoto.com/media/filter/tst/img/294132/TripDocument/1633157080_img_20210820_131426.jpg',
  'https://images.unsplash.com/photo-1566224052100-7dfb53549de6?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://res.cloudinary.com/purnesh/image/upload/f_auto/v1516609214/cafe108.jpg',
  'https://images.unsplash.com/photo-1709623244505-da3f9ea63984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHVkdWNoZXJyeXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1709805471116-26c5adf3012b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHVkdWNoZXJyeXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1710005556849-1a8b237a8eb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHVkdWNoZXJyeXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1566303052303-b2d2a9f16f0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHVkdWNoZXJyeXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1709625215458-69e36584c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHVkdWNoZXJyeXxlbnwwfHwwfHx8MA%3D%3D',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCu-dyo6Tj2hYJ9p0LTtROBTQxIqrdxrN1Pg&s',
  'https://images.unsplash.com/photo-1662572594616-c5752f12dc10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHB1ZHVjaGVycnl8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1581791535045-5819f06be99b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHB1ZHVjaGVycnl8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1619500178934-aa67d4c6623b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVyb3ZpbGxlfGVufDB8fDB8fHww',
  'https://images.unsplash.com/photo-1662572594344-b0f91efb34f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF1cm92aWxsZXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1615309565292-159f2a8505e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c291dGglMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1615196570203-222ade7954da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c291dGglMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D',
  'https://images.unsplash.com/photo-1616849540275-0bc274e2a474?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c291dGglMjBpbmRpYXxlbnwwfHwwfHx8MA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1661963649278-db5e2697d0be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvdXRoJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D',
  'https://imgs.search.brave.com/-gJUxFeiC0fnLnJ9jHm7ZJ-RQcvr6PCNrlwpZ3CpR9o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zLnJm/aS5mci9tZWRpYS9k/aXNwbGF5LzA5OGVj/YjI4LWJiYWEtMTFl/ZS05N2NmLTAwNTA1/NmE5MDI4NC93Ojk4/MC9wOjE2eDkvMDAw/XzExNDFQRS5qcGc',
  'https://imgs.search.brave.com/ykUNcmH3K9K1xN0R-xpXO4gCIh4eCHfCqAEmbM86Qkc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFlL1B1ZHVjaGVy/cnlfUGFya19Nb251/bWVudC5KUEc',
  'https://imgs.search.brave.com/kq9DfQT_nZPyIyRg24vp2iBtSngdHzQXdvhTpZZ15iY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dHJpcHNhdnZ5LmNv/bS90aG1iL29DNDVu/aVFKNGxOcDExdXJp/T2I0ZXZkS0xDOD0v/MTUwMHgwL2ZpbHRl/cnM6bm9fdXBzY2Fs/ZSgpOm1heF9ieXRl/cygxNTAwMDApOnN0/cmlwX2ljYygpL0dl/dHR5SW1hZ2VzLTUx/NjA1Njg2NS01Yjdh/ZDRjZjQ2ZTBmYjAw/NTAyYjNlM2QuanBn',
  'https://imgs.search.brave.com/wMkX7RXzJiNqEoUNvCLCzCLX_cRyxDz5NCZRzjczwNo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I3L1BvbmRpY2hl/cnJ5LF9Qcm9tZW5h/ZGVfQmVhY2gsX0Jh/eV9vZl9CZW5nYWws/X0luZGlhLmpwZw',
  'https://imgs.search.brave.com/qCev5plByjn9ZvnhQGiOozOGSOmJSvBVC_P1zKxvEQU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMyLnRyaXBvdG8u/Y29tL21lZGlhL2Zp/bHRlci90c3QvaW1n/LzEyNTEwNzUvVHJp/cERvY3VtZW50LzE2/MjM1MjUzNTNfMF8x/ZXI5ZmVld3BhcWx0/YWswLmpwZy53ZWJw',
  'https://imgs.search.brave.com/hnsi6d3poJqTVh0eOwiMkZwT8lk2ZV4gxgq6mJ8Hs-A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy84/LzhjL1BvbmRpY2hl/cnJ5LVJvY2tfYmVh/Y2hfYWVyaWFsX3Zp/ZXcuanBn',
  'https://img.veenaworld.com/wp-content/uploads/2023/03/10-Things-That-Make-Pondicherry-An-Unforgetful-Travel-Destination.jpg',
  'http://www.theuntourists.com/wp-content/uploads/2015/11/DSCF41881.jpg',
  'https://static2.tripoto.com/media/filter/nl/img/187611/TripDocument/1493120153_promenade_beach_pondicherry.jpg',
  'https://static2.tripoto.com/media/filter/nl/img/187611/TripDocument/1493120381_travels_pondicherry.png',
  'https://i.pinimg.com/736x/4c/ea/6c/4cea6caeece6f3ae6ae0920f03d31bcb.jpg',
  'https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180221130258/iStock-500320921-1024x682.jpg',
  'https://www.seawatersports.com/img/newimage/places/white-town--.jpg',
  'https://media1.thrillophilia.com/filestore/qcwxf3lf682e228ohkz16wql3qzg_20THBOATS?w=1440&dpr=2',
  'https://revolvingcompass.com/wp/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-16-at-10.11.59-PM-1-1024x768.jpeg?x42979',
  'https://static2.tripoto.com/media/filter/tst/img/183810/TripDocument/1440998902_img_20141113_063611712_hdr.jpg',


]

const captions = [
  "A serene view of Pondicherry's charming streets.",
  "Discover the vibrant attractions of Pondicherry.",
  "Relax by the picturesque paradise beach.",
  "A breathtaking sunset over the tranquil waters.",
  "Wander through the lively markets of Pondicherry.",
  "Experience the charm of Pondicherry at night.",
  "An early morning stroll through the scenic streets.",
];

export function ImagePage() {
  return (
    <div className="relative min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="absolute inset-0 bg-black/50"></div> {/* Optional overlay for better text readability */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {imageUrls.map((url, index) => (
          <CardContainer key={index} className="inter-var w-full">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-4 border">
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={url}
                  alt={`Image ${index + 1}`}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                />
              </CardItem>
              <div className="mt-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-md text-sm text-neutral-600 dark:text-neutral-300">
                {captions[index]}
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default ImagePage;
