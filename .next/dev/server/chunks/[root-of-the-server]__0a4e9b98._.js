module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authenticateUser",
    ()=>authenticateUser,
    "getUserById",
    ()=>getUserById,
    "registerUser",
    ()=>registerUser,
    "updatePaymentStatus",
    ()=>updatePaymentStatus
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
// Simulando um banco de dados
let users = [
    {
        id: '1',
        email: 'demo@example.com',
        password: hashPassword('123456'),
        name: 'Usuário Demo',
        paymentStatus: 'completed',
        purchaseDate: new Date().toISOString(),
        accessLevel: 'premium'
    }
];
function hashPassword(password) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha256').update(password).digest('hex');
}
function registerUser(email, password, name) {
    if (users.find((u)=>u.email === email)) {
        throw new Error('Email já registrado');
    }
    const newUser = {
        id: __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomBytes(8).toString('hex'),
        email,
        password: hashPassword(password),
        name,
        paymentStatus: 'pending',
        accessLevel: 'free'
    };
    users.push(newUser);
    return {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name
    };
}
function authenticateUser(email, password) {
    const user = users.find((u)=>u.email === email && u.password === hashPassword(password));
    if (!user) {
        throw new Error('Email ou senha inválidos');
    }
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        accessLevel: user.accessLevel,
        paymentStatus: user.paymentStatus
    };
}
function getUserById(id) {
    const user = users.find((u)=>u.id === id);
    if (!user) return null;
    return {
        id: user.id,
        email: user.email,
        name: user.name,
        accessLevel: user.accessLevel,
        paymentStatus: user.paymentStatus,
        purchaseDate: user.purchaseDate
    };
}
function updatePaymentStatus(id, status) {
    const user = users.find((u)=>u.id === id);
    if (user) {
        user.paymentStatus = status;
        if (status === 'completed') {
            user.accessLevel = 'premium';
            user.purchaseDate = new Date().toISOString();
        }
    }
}
}),
"[project]/lib/payments.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkPaymentStatus",
    ()=>checkPaymentStatus,
    "getPaymentDetails",
    ()=>getPaymentDetails,
    "listPayments",
    ()=>listPayments,
    "recordPayment",
    ()=>recordPayment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-route] (ecmascript)");
;
// Simulação de pagamentos registrados (em produção, seria via gateway real)
const recordedPayments = new Map();
function recordPayment(userId, pixCode, amount) {
    recordedPayments.set(pixCode, {
        pixCode,
        amount,
        timestamp: Date.now()
    });
    // Atualizar status do usuário
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["updatePaymentStatus"])(userId, 'completed');
    return {
        success: true,
        userId,
        message: 'Pagamento confirmado com sucesso!'
    };
}
function checkPaymentStatus(pixCode) {
    return recordedPayments.has(pixCode);
}
function getPaymentDetails(pixCode) {
    return recordedPayments.get(pixCode) || null;
}
function listPayments() {
    return Array.from(recordedPayments.values());
}
}),
"[project]/app/api/payments/check/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$payments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/payments.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const { pixCode } = await request.json();
        if (!pixCode) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'pixCode é obrigatório'
            }, {
                status: 400
            });
        }
        const isPaid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$payments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkPaymentStatus"])(pixCode);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            pixCode,
            isPaid,
            message: isPaid ? 'Pagamento confirmado!' : 'Aguardando pagamento...'
        }, {
            status: 200
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || 'Erro ao verificar pagamento'
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0a4e9b98._.js.map