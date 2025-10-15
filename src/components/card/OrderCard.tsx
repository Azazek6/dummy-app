import { Package, Calendar, CheckCircle2, Clock, XCircle } from "lucide-react";
import { useOrderStore } from "@/store/order.store";
import { formatDate, getStatusColor, getStatusText } from "@/helpers/general";

const OrderCard = () => {
  const { orders } = useOrderStore();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completado":
        return <CheckCircle2 className="w-5 h-5 text-[var(--color-success)]" />;
      case "En proceso":
        return <Clock className="w-5 h-5 text-[#eda654]" />;
      case "cancelado":
        return <XCircle className="w-5 h-5 text-red-500" />;
    }
  };

  return (
    <>
      {orders.map((order, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-[var(--color-border)] overflow-hidden"
        >
          <div className="bg-[var(--color-surface)] p-6 border-b border-[var(--color-border)]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <Package className="w-6 h-6 text-[#2664eb]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-1">
                    Pedido #{order.order_id}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(order.createdAt)}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${getStatusColor(
                    order.status
                  )}`}
                >
                  {getStatusIcon(order.status)}
                  <span className="text-sm font-semibold">
                    {getStatusText(order.status)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="space-y-4 mb-6">
              {order.orders.map((item, index) => {
                return (
                  <div key={index} className="flex gap-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg border border-[var(--color-border)]"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-[var(--color-text)] mb-1 line-clamp-2">
                        {item.sku}
                      </h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[var(--color-text-muted)]">
                          Cantidad: {item.quantity}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#2664eb]">
                            S/ {item.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-[var(--color-border)] pt-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-[var(--color-text-muted)]">
                  Total
                </span>
                <span className="text-2xl font-bold text-[#2664eb]">
                  S/ {order.total}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderCard;
