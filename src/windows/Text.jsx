import React from 'react'
import { WindowControls } from "#components/index.js";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import useWindowStore from "#store/window.js";

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data || {};

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
            </div>

            <div className="bg-white p-6 max-w-[720px]">
                {name && <h2 className="text-xl font-semibold mb-2">{name}</h2>}
                {subtitle && <p className="text-gray-600 mb-4">{subtitle}</p>}
                {image && (
                    <img
                        src={image}
                        alt={name || "image"}
                        className="w-full max-h-[360px] object-cover rounded mb-4"
                    />
                )}
                <div className="space-y-3 leading-relaxed">
                    {(description || []).map((para, idx) => (
                        <p key={idx}>{para}</p>
                    ))}
                </div>
            </div>
        </>
    )
}

const TextWindow = WindowWrapper(Text, "txtfile")
export default TextWindow
