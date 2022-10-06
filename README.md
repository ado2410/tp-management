# Website quản lý điểm rèn luyện sinh viên tại Phân hiệu Đại học Đà Nẵng tại Kon Tum (Training Point Management)
## 1. Giới thiệu
Theo như tìm hiểu, hiện tại Phân hiệu ĐHĐN tại Kon Tum hiện tại đang quản lý điểm rèn luyện thủ công bằng file Excel, Google Sheets và phiếu đánh giá điểm rèn luyện. Cuối mỗi học kỳ nhà trường đều tổ chức đánh giá điểm rèn luyện cho sinh viên thông qua phiếu chấm điểm rèn luyện, phiếu hướng dẫn chấm điểm rèn luyện và danh sách sinh viên tham gia hoạt động/nhận khen thưởng/bị vi phạm, sinh viên tự chấm điểm rèn luyện sau đó tổng hợp lại toàn bộ phiếu và gửi cho nhà trường. Tuy nhiên phương pháp quản lý và chấm điểm theo cách này còn nhiều hạn chế như: sinh viên phải chấm điểm thủ công, phải đối chiếu nhiều dữ liệu lại với nhau mới hoàn thiện đủ được toàn bộ các mục điểm; các cán bộ lớp và cố vấn học tập phải rà soát lại phiếu đánh giá điểm rèn luyện thủ công cho tất cả từng thành niên trong lớp; các file excel được lưu trữ rời rạc và không đồng bộ với nhau…</br>
Xuất phát từ những lý do đó, nhóm chúng em chọn đề tài “Xây dựng website quản lý điểm rèn luyện sinh viên UDCK” để nghiên cứu nhằm hỗ trợ Nhà trường hoàn thiện hơn chương trình chuyển đổi số và phù hợp với xu hướng của thời đại, cũng như giúp sinh viên và nhà trường có một hệ giống giúp tự động hóa công tác quản lý và chấm điểm rèn luyện.
## 2. Công nghệ sử dụng
Một yếu tố quan trọng để một nhà phát triển website hay phần mềm có thể phát triển và sử dụng được hệ thống của họ trong công việc thực thế là cần phải có một giải pháp thiết kế phù hợp và hiệu quả nhất. Qua quá trình tìm hiểu về thực trạng quản lý thu nhập cũng như là tự nghiên cứu và tìm kiếm các tài liệu liên quan trên Internet thì nhóm chúng em đã đưa ra được một mô hình giải pháp thiết kế hệ thống website như hình dưới:
## 3. Các chức năng
### a. Tác nhân sử dụng
Thông qua nghiên cứu và phân tích thì nhóm chúng em phân chia thành 3 đối tượng sử dụng hệ thống website như sau:
- Người quản trị website (QTV): Người quản trị website hay còn gọi là Admin, chính là người quản trị toàn bộ hệ thống website, họ có quyền truy cập đầy đủ các chức năng và thông tin trong hệ thống. Đối tượng sử dụng có thể là chuyên viên quản trị website, giám đốc hoặc phó giám đốc;
- Người nhập liệu (NNL): Chức năng chính của người nhập liệu là quản lý các hoạt động được giới hạn trong quyền hạn cho phép. Người nhập liệu có thể điểm danh sinh viên tham gia hoạt động cho từng nhóm phòng ban mà họ được truy cập. Đối tượng sử dụng là các cán bộ cấp khoa, các phòng ban…;
- Sinh viên (SV): Sinh viên có quyền truy cập để xem điểm rèn luyện của cá nhân. Đối với cán bộ lớp có quyền cập nhật đánh giá hoạt động cho sinh viên trong lớp khi hệ thống mở quyền truy cập.
### b. Các chức năng trong hệ thống
| STT | Tác nhân | Chức năng | Mô tả |
| - | - | - | - |
| 1 | QTV | Quản lý tài khoản | Quản lý các tài khoản đăng nhập của hệ thống website cho 3 tác nhân là Admin, Người nhập liệu và Sinh viên. |
| 2 | QTV/NNL | Quản lý hoạt động/khen thưởng/vi phạm | Quản lý các hoạt động có trong một học kỳ, mỗi học kỳ có danh sách hoạt động/khen thưởng/vi phạm khác nhau. |
| 3 | QTV/NNL | Quản lý đánh giá sinh viên (điểm danh sinh viên, khen thưởng sinh viên, đánh vi phạm…) | Quản lý đánh giá các hoạt động mà sinh viên tham gia, các khen thưởng và vi phạm. |
| 4 | QTV Cấu hình chấm rèn luyện sinh viên | Ở mỗi học kỳ có các hoạt động và các tiêu chí đánh giá để tính điểm rèn luyện cho sinh viên. Để đánh giá được đúng theo yêu cầu của nhà trường, hệ thống cần phải cấu hình để đánh giá chính xác và chấm điểm rèn luyện chính xác. |
| 5 | QTV Nhập/xuất dữ liệu | Giúp cho QTV nhập và xuất dữ liệu về hoạt động, đánh giá và học kỳ nhanh chóng. |
| 6 | QTV Quản lý nhóm | Quản lý các nhóm khoa/nhóm phòng ban. |
| 6 | QTV/NNL/SV Xem thống kê | Thống kê số lượng và xếp loại sinh viên, theo lớp khoa và khoá. |
| 7 | QTV Quản lý năm học | Quản lý các năm học. |
| 8 | QTV Quản lý học kỳ | Quản lý các học kỳ. |
| 9 | QTV Quản lý khoa | Quản lý các khoa. |
| 10 | QTV Quản lý ngành học | Quản lý các ngành học.
| 11 | QTV Quản lý lớp | Quản lý các lớp. |
| 12 | SV | Xem điểm rèn luyện | Sinh viên có thể xem điểm rèn luyện cá nhân từng học kỳ trên hệ thống website, hệ thống sẽ hiển thị bảng đánh giá điểm theo từng tiêu chí và tổng điểm rèn luyện. |
| 13 | SV | In phiếu điểm rèn luyện | In phiếu phiếu điểm rèn luyện khi sinh viên cần in phiếu điểm để dùng cho nhiều mục đích khác. |
## 4. Demo sản phẩm
