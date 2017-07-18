using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace BIZ
{
    public class Bitacora
    {
        //Representa el id_ en el Documento de Mongo DB
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id;
        [BsonElement("Usuario")]
        public Usuario Usuario { get; set; }
        [BsonElement("TipoEvento")]
        public string TipoEvento { get; set; }
        [BsonElement("DescripcionEvento")]
        public string DescripcionEvento { get; set; }
        [BsonElement("Fecha")]
        public DateTime Fecha { get; set; }
    }
}