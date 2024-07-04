"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const MyPageUpgrade = () => {
    const router = useRouter();

    const [username, setUsername] = useState("이름");
    const [phone, setPhone] = useState("전화번호");
    const [email, setEmail] = useState("이메일");
    const [profileImage, setProfileImage] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(null);

    // 비밀번호 변경 시 비밀번호 확인 일치 여부 메시지 초기화
    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setPassword(value);
        setPasswordMatch(null); // 비밀번호 변경 시 일치 여부 메시지 초기화
    };

    // 비밀번호 확인 일치 여부 실시간 확인
    const handlePasswordConfirmChange = (e) => {
        const { value } = e.target;
        setPasswordConfirm(value);
        setPasswordMatch(value === password);
    };

    // 폼 제출 처리 함수
    const handleSubmit = (event) => {
        event.preventDefault(); // 기본 동작 방지

        // 여기서 서버로 데이터를 전송하는 코드를 작성합니다.
        // 예를 들어 fetch API를 사용하거나 axios 등의 라이브러리를 활용할 수 있습니다.

        // 아래는 fetch를 사용한 예시입니다. 실제 URL과 데이터 형식은 프로젝트에 맞게 수정하세요.
        fetch('https://your-backend-url.com/update-user-info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                phone,
                email,
                profileImage,
                password, // 서버로 전송할 데이터에 비밀번호 추가
            }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // 서버로부터 성공적으로 응답을 받았을 때 수행할 로직을 추가할 수 있습니다.
        })
        .catch((error) => {
            console.error('Error:', error);
            // 오류 처리 로직을 추가할 수 있습니다.
        });
        router.push("/mypage");
    };

    // 비밀번호 입력 여부에 따라 비밀번호 확인 요소 표시 여부 결정
    const isPasswordEntered = password !== '';
    const passwordConfirmSection = isPasswordEntered ? (
        <div className="mb-4 flex justify-center items-center">
            <label className="w-1/6 block text-sm font-bold mb-2" htmlFor="passwordConfirm">비밀번호 확인</label>
            <input
                type="password"
                id="passwordConfirm"
                className="px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                value={passwordConfirm}
                onChange={handlePasswordConfirmChange}
            />
        </div>
    ) : null;

    return (
        <section className="bg-white h-screen flex justify-center items-center">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 flex justify-center items-center">
                        <label className="w-1/6 block text-sm font-bold mb-2" htmlFor="username">이름</label>
                        <input
                            type="text"
                            id="username"
                            className="px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 flex justify-center items-center">
                        <label className="w-1/6 block text-sm font-bold mb-2" htmlFor="phone">전화번호</label>
                        <input
                            type="text"
                            id="phone"
                            className="px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 flex justify-center items-center">
                        <label className="w-1/6 block text-sm font-bold mb-2" htmlFor="email">이메일</label>
                        <input
                            type="email"
                            id="email"
                            className="px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4 flex justify-center items-center">
                        <label className="w-1/6 block text-sm font-bold mb-2" htmlFor="password">비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            className="px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    {passwordConfirmSection}
                    <div>
                        {isPasswordEntered && passwordConfirm !== '' && (
                            <span className={passwordMatch ? "text-blue-500" : "text-red-500"}>
                                {passwordMatch ? "비밀번호가 일치합니다" : "비밀번호가 일치하지 않습니다"}
                            </span>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="profileImage">프로필 사진</label>
                        <input
                            type="file"
                            id="profileImage"
                            accept="image/*"
                            className="px-3 py-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                            onChange={(e) => setProfileImage(e.target.files[0])}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                        >
                            정보 수정
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default MyPageUpgrade;
